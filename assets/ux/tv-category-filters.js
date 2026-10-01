/* PremiumStore television category experience.
 * Keeps Shoptet's own filter inputs, requests, results and query URLs unchanged.
 * Presentation and quick controls are scoped to the /televizory/ category only.
 */
(function () {
  'use strict';

  if (!document.body || !document.body.classList.contains('in-televizory')) return;

  var body = document.body;
  var root = document.querySelector('.category-content-wrapper');
  var categoryTop = document.querySelector('.category-top');
  var categoryTitle = document.querySelector('.category-title');
  var filterBox = document.querySelector('.box-filters');
  if (!root || !categoryTop || !categoryTitle || !filterBox) return;

  body.classList.add('ps-tv-category-enhanced');

  var quickSpecs = [
    { facet: 'Uhlopriečka', values: ['43"', '50"', '55"', '65"'] },
    { facet: 'Technológia displeja', values: ['OLED', 'QLED', 'Mini LED'] },
    { facet: 'Rozlíšenie', values: ['4K UHD'] }
  ];
  var priority = [
    'Uhlopriečka',
    'Technológia displeja',
    'Rozlíšenie',
    'Obnovovacia frekvencia',
    'Operačný systém',
    'Smart TV',
    'Počet HDMI',
    'Počet USB',
    'Wi-Fi',
    'Bluetooth',
    'LAN (Ethernet)',
    'Tuner pozemnej TV',
    'Tuner káblovej TV',
    'Satelitný tuner',
    'Typ produktu',
    'Značky'
  ];
  var searchNames = ['Uhlopriečka', 'Technológia displeja', 'Rozlíšenie', 'Obnovovacia frekvencia', 'Operačný systém', 'Značky'];
  var activeFacetSection = null;
  var returnFocusTo = null;
  var inertedElements = [];

  function normalize(text) {
    return String(text || '')
      .replace(/\u00a0/g, ' ')
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/\s+/g, ' ').trim().toLocaleLowerCase('sk');
  }

  function getFilters() {
    return document.querySelector('#filters');
  }

  function sectionTitle(section) {
    var heading = section && section.querySelector('h4, h3, .filter-section__name');
    return heading ? heading.textContent.replace(/\s+/g, ' ').trim() : '';
  }

  function directLabelText(label) {
    if (!label) return '';
    var text = Array.prototype.filter.call(label.childNodes, function (node) {
      return node.nodeType === 3;
    }).map(function (node) { return node.textContent; }).join(' ');
    if (!text) text = label.textContent;
    return text.replace(/\u00a0/g, ' ').replace(/\s+/g, ' ').trim();
  }

  function getOptionLabel(input) {
    var filters = getFilters();
    if (!input || !filters) return null;
    return (input.id && filters.querySelector('label[for="' + CSS.escape(input.id) + '"]')) || input.closest('label');
  }

  function getSections() {
    var filters = getFilters();
    return filters ? Array.prototype.slice.call(filters.querySelectorAll('.filter-section')).filter(function (section) {
      return !section.classList.contains('filter-section-count') &&
        !section.classList.contains('filter-section-button') &&
        Boolean(sectionTitle(section));
    }) : [];
  }

  function findSectionByTitle(title) {
    var wanted = normalize(title);
    return getSections().find(function (section) { return normalize(sectionTitle(section)) === wanted; });
  }

  function getInputs(section) {
    return section ? Array.prototype.slice.call(section.querySelectorAll('input[type="checkbox"], input[type="radio"]')) : [];
  }

  function prepareFacetOptions(section) {
    var title = sectionTitle(section);
    var fieldset = section.querySelector('form fieldset');
    if (!fieldset) return;
    var rows = Array.prototype.slice.call(fieldset.children).filter(function (row) {
      return row.querySelector && row.querySelector('input[type="checkbox"], input[type="radio"]');
    });
    if (!section.dataset.psTvSorted) {
      var preferred = [];
      if (normalize(title) === normalize('Uhlopriečka')) preferred = ['43"', '50"', '55"', '65"', '75"', '85"'];
      if (normalize(title) === normalize('Technológia displeja')) preferred = ['OLED', 'QLED', 'Mini LED', 'Neo QLED', 'LED'];
      if (normalize(title) === normalize('Rozlíšenie')) preferred = ['4K UHD', '8K UHD', 'Full HD', 'HD Ready'];
      if (preferred.length) {
        var original = rows.slice();
        rows.sort(function (a, b) {
          function rowLabel(row) {
            var input = row.querySelector('input[type="checkbox"], input[type="radio"]');
            return directLabelText(getOptionLabel(input));
          }
          var valueA = rowLabel(a);
          var valueB = rowLabel(b);
          var orderA = preferred.findIndex(function (value) { return normalize(value) === normalize(valueA); });
          var orderB = preferred.findIndex(function (value) { return normalize(value) === normalize(valueB); });
          if (orderA < 0) orderA = preferred.length + original.indexOf(a);
          if (orderB < 0) orderB = preferred.length + original.indexOf(b);
          return orderA - orderB;
        });
        if (rows.some(function (row, index) { return row !== original[index]; })) rows.forEach(function (row) { fieldset.appendChild(row); });
      }
      section.dataset.psTvSorted = 'true';
    }
    if (rows.length > 8 && !section.querySelector('.ps-tv-show-more')) {
      fieldset.classList.add('ps-tv-options-collapsible');
      var more = document.createElement('button');
      more.type = 'button';
      more.className = 'ps-tv-show-more';
      more.textContent = 'Zobraziť všetky možnosti (' + rows.length + ')';
      more.setAttribute('aria-expanded', 'false');
      more.addEventListener('click', function () {
        var expanded = fieldset.classList.toggle('ps-tv-options-expanded');
        more.textContent = expanded ? 'Zobraziť menej' : 'Zobraziť všetky možnosti (' + rows.length + ')';
        more.setAttribute('aria-expanded', expanded ? 'true' : 'false');
      });
      var form = section.querySelector('form');
      if (form) form.appendChild(more);
    }
  }

  function findOption(facet, value) {
    var section = findSectionByTitle(facet);
    if (!section) return null;
    var wanted = normalize(value);
    var input = getInputs(section).find(function (candidate) {
      return normalize(directLabelText(getOptionLabel(candidate))) === wanted;
    });
    return input ? { input: input, label: getOptionLabel(input) } : null;
  }

  function createQuickFilters() {
    categoryTop = document.querySelector('.category-top');
    categoryTitle = categoryTop && categoryTop.querySelector('.category-title');
    if (!categoryTop || !categoryTitle) return;
    if (categoryTop.querySelector('.ps-tv-quick-filters')) return;
    var bar = document.createElement('div');
    bar.className = 'ps-tv-quick-filters';
    bar.setAttribute('aria-label', 'Rýchly výber televízora');
    var lead = document.createElement('span');
    lead.className = 'ps-tv-quick-label';
    lead.textContent = 'Vyberte podľa veľkosti alebo obrazu:';
    bar.appendChild(lead);

    quickSpecs.forEach(function (group) {
      group.values.forEach(function (value) {
        var option = findOption(group.facet, value);
        if (!option) return;
        var button = document.createElement('button');
        button.type = 'button';
        button.className = 'ps-tv-quick-chip';
        button.textContent = value;
        button.dataset.facet = group.facet;
        button.dataset.value = value;
        button.setAttribute('aria-pressed', option.input.checked ? 'true' : 'false');
        button.disabled = option.input.disabled && !option.input.checked;
        button.addEventListener('click', function () {
          var current = findOption(group.facet, value);
          if (!current || current.input.disabled) return;
          current.input.click();
          updateInterface();
        });
        bar.appendChild(button);
      });
    });
    categoryTitle.insertAdjacentElement('afterend', bar);
  }

  function sortSectionsAndAddAccordions() {
    var container = document.querySelector('#category-filter-hover');
    if (!container) return;
    var sections = Array.prototype.slice.call(container.querySelectorAll(':scope > .filter-section'));
    var originalOrder = sections.slice();
    sections.sort(function (a, b) {
      var titleA = normalize(sectionTitle(a));
      var titleB = normalize(sectionTitle(b));
      var indexA = priority.findIndex(function (name) { return normalize(name) === titleA; });
      var indexB = priority.findIndex(function (name) { return normalize(name) === titleB; });
      return (indexA < 0 ? 100 : indexA) - (indexB < 0 ? 100 : indexB);
    });
    if (sections.some(function (section, index) { return section !== originalOrder[index]; })) {
      sections.forEach(function (section) { container.appendChild(section); });
    }
    sections.forEach(function (section, index) {
      section.classList.add('ps-tv-filter-section');
      prepareFacetOptions(section);
      var heading = section.querySelector('h4, h3, .filter-section__name');
      if (!heading) return;
      var title = sectionTitle(section);
      section.dataset.psTvPriority = String(index + 1);
      var existingToggle = heading.querySelector('.ps-tv-section-toggle');
      if (existingToggle) {
        var expanded = section.classList.contains('ps-tv-expanded');
        existingToggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
        return;
      }
      var selected = getInputs(section).some(function (input) { return input.checked; });
      var expandedByDefault = index < 3 || selected;
      section.classList.toggle('ps-tv-expanded', expandedByDefault);

      var toggle = document.createElement('button');
      toggle.className = 'ps-tv-section-toggle';
      toggle.type = 'button';
      toggle.setAttribute('aria-expanded', expandedByDefault ? 'true' : 'false');
      toggle.setAttribute('aria-label', (expandedByDefault ? 'Zbaliť ' : 'Rozbaliť ') + title);
      toggle.innerHTML = '<span aria-hidden="true"></span>';
      toggle.addEventListener('click', function (event) {
        event.preventDefault();
        event.stopPropagation();
        var expanded = section.classList.toggle('ps-tv-expanded');
        toggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
        toggle.setAttribute('aria-label', (expanded ? 'Zbaliť ' : 'Rozbaliť ') + title);
      });
      heading.appendChild(toggle);
      if (searchNames.some(function (name) { return normalize(name) === normalize(title); }) && getInputs(section).length > 5 && !section.querySelector('.ps-tv-facet-search')) {
        var search = document.createElement('input');
        search.type = 'search';
        search.className = 'ps-tv-facet-search';
        search.placeholder = 'Hľadať možnosť';
        search.setAttribute('aria-label', 'Hľadať v možnostiach „' + title + '”');
        var form = section.querySelector('form');
        if (form) section.insertBefore(search, form);
        search.addEventListener('input', function () {
          var query = normalize(search.value);
          getInputs(section).forEach(function (input) {
            var label = getOptionLabel(input);
            var row = label && (label.closest('div') || label);
            if (row) row.classList.toggle('ps-tv-search-hidden', Boolean(query) && !normalize(label.textContent).includes(query));
          });
        });
      }
    });

    var price = getFilters() && getFilters().querySelector('.slider-wrapper');
    if (price && !price.querySelector('.ps-tv-price-toggle')) {
      var priceHeading = price.querySelector('h4');
      if (priceHeading) {
        price.classList.add('ps-tv-price-section');
        var priceToggle = document.createElement('button');
        priceToggle.type = 'button';
        priceToggle.className = 'ps-tv-section-toggle ps-tv-price-toggle';
        priceToggle.setAttribute('aria-expanded', 'false');
        priceToggle.setAttribute('aria-label', 'Rozbaliť cenu');
        priceToggle.innerHTML = '<span aria-hidden="true"></span>';
        priceHeading.appendChild(priceToggle);
        priceToggle.addEventListener('click', function (event) {
          event.preventDefault();
          event.stopPropagation();
          var expanded = price.classList.toggle('ps-tv-expanded');
          priceToggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
          priceToggle.setAttribute('aria-label', (expanded ? 'Zbaliť' : 'Rozbaliť') + ' cenu');
        });
      }
    }
  }

  function createActiveFilters() {
    var products = document.querySelector('#products');
    if (!products || !products.parentElement) return null;
    var bar = products.parentElement.querySelector(':scope > .ps-tv-active-filters');
    if (!bar) {
      bar = document.createElement('div');
      bar.className = 'ps-tv-active-filters';
      bar.setAttribute('aria-live', 'polite');
      bar.setAttribute('aria-label', 'Aktívne filtre');
      products.insertAdjacentElement('beforebegin', bar);
    }
    return bar;
  }

  function refreshActiveFilters() {
    var bar = createActiveFilters();
    var filters = getFilters();
    if (!bar || !filters) return;
    bar.textContent = '';
    var checked = Array.prototype.slice.call(filters.querySelectorAll('input[type="checkbox"]:checked, input[type="radio"]:checked'))
      .filter(function (input) { return input.name !== 'stock' && input.id !== 'stock'; });
    if (!checked.length) {
      bar.hidden = true;
      return;
    }
    bar.hidden = false;
    var label = document.createElement('span');
    label.className = 'ps-tv-active-label';
    label.textContent = 'Vybraté:';
    bar.appendChild(label);

    checked.forEach(function (input) {
      var inputLabel = getOptionLabel(input);
      if (!inputLabel) return;
      var chip = document.createElement('button');
      chip.type = 'button';
      chip.className = 'ps-tv-active-chip';
      chip.textContent = directLabelText(inputLabel) + ' ×';
      chip.setAttribute('aria-label', 'Odstrániť filter ' + directLabelText(inputLabel));
      chip.addEventListener('click', function () {
        var current = getFilters() && getFilters().querySelector('#' + CSS.escape(input.id));
        if (current && current.checked && !current.disabled) current.click();
      });
      bar.appendChild(chip);
    });

    var clear = filters.querySelector('#clear-filters a[href]');
    if (clear) {
      var clearLink = document.createElement('a');
      clearLink.className = 'ps-tv-clear-filters';
      clearLink.href = clear.href;
      clearLink.textContent = 'Vymazať všetko';
      bar.appendChild(clearLink);
    }
  }

  function updateQuickFilters() {
    var filters = getFilters();
    if (!filters) return;
    document.querySelectorAll('.ps-tv-quick-chip').forEach(function (button) {
      var option = findOption(button.dataset.facet, button.dataset.value);
      if (!option) return;
      button.disabled = option.input.disabled && !option.input.checked;
      button.classList.toggle('is-selected', option.input.checked);
      button.setAttribute('aria-pressed', option.input.checked ? 'true' : 'false');
    });
  }

  function refreshMobileCount() {
    var button = document.querySelector('.ps-tv-mobile-filter-button');
    var filters = getFilters();
    if (!button || !filters) return;
    var total = filters.querySelectorAll('input[type="checkbox"]:checked:not([name="stock"]), input[type="radio"]:checked').length;
    button.textContent = total ? 'Filtre (' + total + ')' : 'Filtre';
  }

  function updateInterface() {
    updateQuickFilters();
    refreshActiveFilters();
    refreshMobileCount();
    var filters = getFilters();
    if (filters) {
      filters.querySelectorAll('.ps-tv-filter-section').forEach(function (section) {
        if (getInputs(section).some(function (input) { return input.checked; })) {
          section.classList.add('ps-tv-expanded');
          var toggle = section.querySelector('.ps-tv-section-toggle');
          if (toggle) toggle.setAttribute('aria-expanded', 'true');
        }
      });
    }
  }

  function createMobileControls() {
    var categoryHeader = document.querySelector('#category-header');
    if (!categoryHeader || categoryHeader.querySelector('.ps-tv-mobile-filter-button')) return;
    var button = document.createElement('button');
    button.type = 'button';
    button.className = 'ps-tv-mobile-filter-button';
    button.setAttribute('aria-haspopup', 'dialog');
    button.setAttribute('aria-controls', 'filters');
    button.setAttribute('aria-expanded', 'false');
    button.textContent = 'Filtre';
    var controls = categoryHeader.querySelector('.ps-tv-mobile-controls');
    if (!controls) {
      controls = document.createElement('div');
      controls.className = 'ps-tv-mobile-controls';
      categoryHeader.appendChild(controls);
    }
    controls.insertBefore(button, controls.firstChild);
    var sorting = categoryHeader.querySelector('.listSorting');
    if (sorting && sorting.parentElement !== controls) controls.appendChild(sorting);
    var sortButton = controls.querySelector('.sortingToggle');
    if (sortButton) sortButton.setAttribute('aria-label', 'Zoradiť produkty');
    button.addEventListener('click', function () { openMobileFilters(button); });
  }

  function addDrawerActions() {
    var filters = getFilters();
    if (!filters || filters.querySelector('.ps-tv-drawer-head')) return;
    var head = document.createElement('div');
    head.className = 'ps-tv-drawer-head';
    var title = document.createElement('strong');
    title.textContent = 'Filtre televízorov';
    var close = document.createElement('button');
    close.type = 'button';
    close.className = 'ps-tv-drawer-close';
    close.textContent = 'Zavrieť';
    close.addEventListener('click', function () { closeMobileFilters(true); });
    head.appendChild(title);
    head.appendChild(close);
    var first = filters.firstElementChild;
    filters.insertBefore(head, first);

    var footer = document.createElement('div');
    footer.className = 'ps-tv-drawer-footer';
    var done = document.createElement('button');
    done.type = 'button';
    done.textContent = 'Hotovo';
    done.addEventListener('click', function () { closeMobileFilters(true); });
    footer.appendChild(done);
    filters.appendChild(footer);
  }

  function setBackgroundInertExcept(dialogHost, shouldInert) {
    if (!shouldInert) {
      inertedElements.forEach(function (entry) { entry.element.inert = entry.wasInert; });
      inertedElements = [];
      return;
    }
    inertedElements = [];
    var node = dialogHost;
    while (node && node !== body) {
      var parent = node.parentElement;
      if (!parent) break;
      Array.prototype.forEach.call(parent.children, function (sibling) {
        if (sibling === node) return;
        inertedElements.push({ element: sibling, wasInert: sibling.inert });
        sibling.inert = true;
      });
      node = parent;
    }
  }

  function openMobileFilters(button) {
    var filters = getFilters();
    if (!filters) return;
    addDrawerActions();
    returnFocusTo = button;
    body.classList.add('ps-tv-filter-sheet-open');
    // Active-filter URLs may place #filters directly in .category-content-wrapper,
    // outside the traditional wrapper. Keep the actual dialog interactive.
    setBackgroundInertExcept(filters, true);
    button.setAttribute('aria-expanded', 'true');
    filters.setAttribute('role', 'dialog');
    filters.setAttribute('aria-modal', 'true');
    filters.setAttribute('aria-label', 'Filtre televízorov');
    var close = filters.querySelector('.ps-tv-drawer-close');
    if (close) close.focus();
  }

  function closeMobileFilters(restoreFocus) {
    var filters = getFilters();
    body.classList.remove('ps-tv-filter-sheet-open');
    setBackgroundInertExcept(null, false);
    if (filters) {
      filters.removeAttribute('role');
      filters.removeAttribute('aria-modal');
      filters.removeAttribute('aria-label');
    }
    if (returnFocusTo) returnFocusTo.setAttribute('aria-expanded', 'false');
    if (restoreFocus && returnFocusTo) returnFocusTo.focus();
    returnFocusTo = null;
  }

  function prepareFilters() {
    filterBox = document.querySelector('.box-filters');
    var filters = getFilters();
    if (!filters || !filterBox) return;
    if (!filterBox.querySelector('.ps-tv-filter-title')) {
      var panelTitle = document.createElement('h2');
      panelTitle.className = 'ps-tv-filter-title';
      panelTitle.textContent = 'Filtre';
      filterBox.insertBefore(panelTitle, filterBox.firstElementChild);
    }
    sortSectionsAndAddAccordions();
    addDrawerActions();
    var sidebar = filterBox.querySelector('.filters-wrapper');
    if (sidebar) sidebar.classList.add('ps-tv-native-filter-wrapper');
  }

  function attachBackdrop() {
    if (document.querySelector('.ps-tv-filter-backdrop')) return;
    var backdrop = document.createElement('button');
    backdrop.type = 'button';
    backdrop.className = 'ps-tv-filter-backdrop';
    backdrop.setAttribute('aria-label', 'Zavrieť filtre');
    document.body.appendChild(backdrop);
  }

  createQuickFilters();
  prepareFilters();
  createMobileControls();
  attachBackdrop();
  updateInterface();

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && body.classList.contains('ps-tv-filter-sheet-open')) closeMobileFilters(true);
  });
  document.addEventListener('click', function (event) {
    var target = event.target;
    var backdrop = document.querySelector('.ps-tv-filter-backdrop');
    if (backdrop && (target === backdrop || backdrop.contains(target))) {
      event.preventDefault();
      closeMobileFilters(true);
    }
  }, true);
  document.addEventListener('change', function (event) {
    if (event.target && event.target.closest && event.target.closest('#filters')) updateInterface();
  }, true);
  document.addEventListener('input', function (event) {
    if (event.target && event.target.closest && event.target.closest('#filters')) updateInterface();
  }, true);

  var repairTimer = null;
  function repairReplacedCategoryUi() {
    if (!body.classList.contains('in-televizory')) return;
    var currentRoot = document.querySelector('.category-content-wrapper');
    var currentTop = document.querySelector('.category-top');
    var currentTitle = currentTop && currentTop.querySelector('.category-title');
    var currentFilterBox = document.querySelector('.box-filters');
    var products = document.querySelector('#products');
    var activeBar = document.querySelector('.ps-tv-active-filters');
    var needsRepair = root !== currentRoot || categoryTop !== currentTop || categoryTitle !== currentTitle ||
      filterBox !== currentFilterBox || !document.querySelector('.ps-tv-quick-filters') ||
      !document.querySelector('.ps-tv-mobile-filter-button') || !document.querySelector('.ps-tv-filter-backdrop') ||
      (products && (!activeBar || activeBar.parentElement !== products.parentElement)) ||
      getSections().some(function (section) {
        var heading = section.querySelector('h4, h3, .filter-section__name');
        return heading && !heading.querySelector('.ps-tv-section-toggle');
      });
    if (!needsRepair || !currentRoot || !currentTop || !currentTitle || !currentFilterBox) return;
    root = currentRoot;
    categoryTop = currentTop;
    categoryTitle = currentTitle;
    filterBox = currentFilterBox;
    createQuickFilters();
    prepareFilters();
    createMobileControls();
    attachBackdrop();
    updateInterface();
    if (body.classList.contains('ps-tv-filter-sheet-open')) {
      var filters = getFilters();
      if (filters) {
        filters.setAttribute('role', 'dialog');
        filters.setAttribute('aria-modal', 'true');
        filters.setAttribute('aria-label', 'Filtre televízorov');
      }
    }
  }
  var categoryUiObserver = new MutationObserver(function () {
    window.clearTimeout(repairTimer);
    repairTimer = window.setTimeout(repairReplacedCategoryUi, 60);
  });
  categoryUiObserver.observe(document.body, { childList: true, subtree: true });

  window.__psTvCategoryFilterUI = {
    open: openMobileFilters,
    close: closeMobileFilters,
    refresh: updateInterface
  };
})();
