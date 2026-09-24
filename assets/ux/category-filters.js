/* Compact category filters for PremiumStore / Shoptet Disco.
   Keeps the original Shoptet forms and their submit behavior intact. */
(function () {
  'use strict';

  function initCategoryFilters() {
    var body = document.body;
    if (!body || !body.classList.contains('type-category')) return;

    var filters = document.getElementById('filters');
    var wrapper = document.querySelector('#filters-wrapper > .filters-wrapper');
    var buttonWrap = wrapper && wrapper.querySelector('.filters-unveil-button-wrapper');
    var pricePanel = filters && filters.querySelector('.slider-wrapper');
    if (!filters || !wrapper || !buttonWrap || !pricePanel) return;
    if (wrapper.querySelector('.ps-category-filter-toolbar')) return;

    var toolbar = document.createElement('div');
    toolbar.className = 'ps-category-filter-toolbar';
    toolbar.setAttribute('role', 'group');
    toolbar.setAttribute('aria-label', 'Filtrovať produkty');

    var toolbarLabel = document.createElement('span');
    toolbarLabel.className = 'ps-category-filter-heading';
    var filterIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    filterIcon.setAttribute('viewBox', '0 0 24 24');
    filterIcon.setAttribute('aria-hidden', 'true');
    var filterPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    filterPath.setAttribute('d', 'M3 5h18l-7 8v5l-4 2v-7L3 5z');
    filterIcon.appendChild(filterPath);
    toolbarLabel.appendChild(filterIcon);
    var toolbarLabelText = document.createElement('span');
    toolbarLabelText.textContent = 'Filtrovať';
    toolbarLabel.appendChild(toolbarLabelText);
    toolbar.appendChild(toolbarLabel);

    var backdrop = document.createElement('div');
    backdrop.className = 'ps-category-filter-backdrop';
    backdrop.setAttribute('aria-hidden', 'true');
    document.body.appendChild(backdrop);

    var facetButtons = [];
    var activeButton = null;

    function makeButton(label, mode, target, optionCount) {
      var button = document.createElement('button');
      button.type = 'button';
      button.className = 'ps-category-facet-button';
      button.setAttribute('aria-expanded', 'false');
      button.setAttribute('aria-haspopup', 'dialog');
      button.dataset.psMode = mode;
      if (target) button.dataset.psTarget = target;

      var text = document.createElement('span');
      text.className = 'ps-category-facet-label';
      text.textContent = label;
      button.appendChild(text);

      var count = document.createElement('span');
      count.className = 'ps-category-facet-count';
      count.setAttribute('aria-hidden', 'true');
      if (optionCount > 0) {
        count.textContent = String(optionCount);
        button.appendChild(count);
      }

      var chevron = document.createElement('span');
      chevron.className = 'ps-category-facet-chevron';
      chevron.setAttribute('aria-hidden', 'true');
      button.appendChild(chevron);
      toolbar.appendChild(button);

      facetButtons.push({ button: button, label: label, count: count, mode: mode, target: target || null });
      button.addEventListener('click', function () {
        if (activeButton === button) {
          closePanel(true);
          return;
        }
        openPanel(button, mode, target || null);
      });
      return button;
    }

    function createSearch(section) {
      var fieldset = section.querySelector('fieldset');
      var form = section.querySelector('form');
      var checkboxes = section.querySelectorAll('input[type="checkbox"], input[type="radio"]');
      if (!fieldset || !form || checkboxes.length < 14) return;

      var search = document.createElement('input');
      search.type = 'search';
      search.className = 'ps-category-filter-search';
      search.placeholder = 'Hľadať možnosť';
      search.setAttribute('aria-label', 'Hľadať v možnostiach filtra');
      search.autocomplete = 'off';
      section.insertBefore(search, form);

      // Shoptet delegates several filter events from the native form. Isolate
      // local search keystrokes so they cannot trigger its manufacturer filter.
      ['keydown', 'keypress', 'keyup', 'change', 'search', 'compositionstart', 'compositionend'].forEach(function (type) {
        search.addEventListener(type, function (event) {
          event.stopPropagation();
          if (type === 'keydown' && event.key === 'Enter') event.preventDefault();
        });
      });

      search.addEventListener('input', function (event) {
        event.stopPropagation();
        var query = search.value.trim().toLocaleLowerCase('sk');
        checkboxes.forEach(function (input) {
          var label = input.id ? section.querySelector('label[for="' + CSS.escape(input.id) + '"]') : input.closest('label');
          var row = label && label.closest('div');
          if (!row) row = input.parentElement;
          if (!row || row === fieldset || row === form) return;
          var content = (row.textContent || '').trim().toLocaleLowerCase('sk');
          row.classList.toggle('ps-category-filter-search-hidden', Boolean(query) && !content.includes(query));
        });
      });
    }

    function getAvailableCount(section) {
      return section.querySelectorAll('input[type="checkbox"], input[type="radio"]').length;
    }

    function isStockSection(section) {
      return Boolean(section.querySelector('input[name="stock"], #stock'));
    }

    function syncResetLink() {
      var currentReset = filters.querySelector('#clear-filters a[href]');
      var resetLink = toolbar.querySelector('.ps-category-filter-reset');
      var min = filters.querySelector('#min');
      var max = filters.querySelector('#max');
      var minBound = filters.querySelector('#categoryMinValue');
      var maxBound = filters.querySelector('#categoryMaxValue');
      var activePrice = min && max && minBound && maxBound &&
        (min.textContent.trim() !== minBound.textContent.trim() || max.textContent.trim() !== maxBound.textContent.trim());
      var activeOptions = filters.querySelector('input[type="checkbox"]:checked:not([name="stock"]), input[type="radio"]:checked');

      if (currentReset) {
        resetLink = currentReset;
        resetLink.removeAttribute('class');
        resetLink.className = 'ps-category-filter-reset';
        resetLink.textContent = '× Zrušiť filtre';
        resetLink.setAttribute('aria-label', 'Zrušiť všetky filtre');
        resetLink.setAttribute('title', 'Zrušiť všetky filtre');
        toolbar.insertBefore(resetLink, toolbar.querySelector('.ps-category-facet-button'));
      } else if (resetLink && !activePrice && !activeOptions) {
        resetLink.remove();
      }
    }

    function updateBadges() {
      facetButtons.forEach(function (facet) {
        var selected = 0;
        if (facet.mode === 'price') {
          var min = filters.querySelector('#min');
          var max = filters.querySelector('#max');
          var minBound = filters.querySelector('#categoryMinValue');
          var maxBound = filters.querySelector('#categoryMaxValue');
          var activePrice = min && max && minBound && maxBound &&
            (min.textContent.trim() !== minBound.textContent.trim() || max.textContent.trim() !== maxBound.textContent.trim());
          facet.button.classList.toggle('is-active', Boolean(activePrice));
          facet.count.textContent = activePrice ? '1' : '';
          facet.count.hidden = !activePrice;
          if (activePrice && !facet.count.isConnected) facet.button.insertBefore(facet.count, facet.button.querySelector('.ps-category-facet-chevron'));
          return;
        }

        var section = filters.querySelector('[data-ps-facet-section="' + CSS.escape(facet.target) + '"]');
        if (section) selected = section.querySelectorAll('input[type="checkbox"]:checked, input[type="radio"]:checked').length;
        var available = section ? getAvailableCount(section) : 0;
        facet.button.classList.toggle('is-active', selected > 0);
        facet.count.textContent = String(selected || available);
        facet.count.hidden = available === 0;
        if (available > 0 && !facet.count.isConnected) facet.button.insertBefore(facet.count, facet.button.querySelector('.ps-category-facet-chevron'));
      });
      syncResetLink();
    }

    function setExpanded(button) {
      facetButtons.forEach(function (facet) {
        facet.button.setAttribute('aria-expanded', facet.button === button ? 'true' : 'false');
      });
    }

    function openPanel(button, mode, target) {
      filters.classList.remove('ps-category-filter-price', 'ps-category-filter-group');
      filters.classList.add('ps-category-filter-open');
      filters.classList.add(mode === 'price' ? 'ps-category-filter-price' : 'ps-category-filter-group');
      filters.dataset.psMode = mode;
      filters.dataset.psTarget = target || '';
      filters.setAttribute('role', 'dialog');
      filters.setAttribute('aria-label', button.querySelector('.ps-category-facet-label').textContent);

      filters.querySelectorAll('.ps-category-filter-section-active').forEach(function (section) {
        section.classList.remove('ps-category-filter-section-active');
      });
      if (mode === 'group' && target) {
        var section = filters.querySelector('[data-ps-facet-section="' + CSS.escape(target) + '"]');
        if (section) section.classList.add('ps-category-filter-section-active');
      }

      activeButton = button;
      setExpanded(button);
      if (window.matchMedia('(max-width: 767px)').matches) {
        backdrop.classList.add('is-visible');
        body.classList.add('ps-category-filter-lock');
      }
    }

    function closePanel(returnFocus) {
      filters.classList.remove('ps-category-filter-open', 'ps-category-filter-price', 'ps-category-filter-group');
      filters.removeAttribute('data-ps-mode');
      filters.removeAttribute('data-ps-target');
      filters.removeAttribute('role');
      filters.removeAttribute('aria-label');
      filters.querySelectorAll('.ps-category-filter-section-active').forEach(function (section) {
        section.classList.remove('ps-category-filter-section-active');
      });
      backdrop.classList.remove('is-visible');
      body.classList.remove('ps-category-filter-lock');
      facetButtons.forEach(function (facet) { facet.button.setAttribute('aria-expanded', 'false'); });
      var previous = activeButton;
      activeButton = null;
      if (returnFocus && previous) previous.focus();
    }

    var stockInput = filters.querySelector('input[name="stock"], #stock');
    if (stockInput) {
      var stockSection = stockInput.closest('.filter-section');
      if (stockSection) stockSection.classList.add('ps-category-stock-filter');
    }

    var priceButton = makeButton('Cena', 'price', null, 0);
    var sections = Array.from(filters.querySelectorAll('.filter-section')).filter(function (section) {
      if (section.classList.contains('filter-section-button') || section.classList.contains('filter-section-count')) return false;
      if (isStockSection(section)) {
        section.classList.add('ps-category-stock-filter');
        return false;
      }
      var heading = section.querySelector('h4, h3, .filter-section__name');
      var controls = section.querySelector('input[type="checkbox"], input[type="radio"], select');
      if (!heading || !controls) return false;
      return true;
    });

    sections.forEach(function (section, index) {
      var heading = section.querySelector('h4, h3, .filter-section__name');
      var name = heading ? heading.textContent.replace(/\s+/g, ' ').trim() : 'Možnosti';
      var key = 'facet-' + index;
      section.dataset.psFacetSection = key;
      var count = getAvailableCount(section);
      var label = /značk/i.test(name) ? 'Značka' : name;
      makeButton(label, 'group', key, count);
      createSearch(section);

      section.querySelectorAll('form fieldset').forEach(function (fieldset) {
        var controls = fieldset.querySelectorAll('input[type="checkbox"], input[type="radio"]');
        if (controls.length > 3 && controls.length > 0) fieldset.classList.add('ps-category-filter-values');
      });
    });

    if (!sections.length) {
      // A category with price-only filtering still receives the same compact control.
    }

    buttonWrap.appendChild(toolbar);
    body.classList.add('ps-category-filter-enhanced');
    backdrop.addEventListener('click', function () { closePanel(false); });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && activeButton) closePanel(true);
    });
    document.addEventListener('click', function (event) {
      if (!activeButton || window.matchMedia('(max-width: 767px)').matches) return;
      if (filters.contains(event.target) || toolbar.contains(event.target)) return;
      closePanel(false);
    });
    filters.addEventListener('change', updateBadges);
    filters.addEventListener('input', updateBadges);
    updateBadges();
    window.__psCategoryFilterState = {
      filters: filters,
      facets: facetButtons,
      closePanel: closePanel,
      refresh: updateBadges
    };

    // Shoptet replaces the filter markup after applying a facet without a full
    // page load. Rebuild the compact controls when that native fragment changes.
    if (!window.__psCategoryFilterObserver) {
      var observedRoot = document.body;
      if (observedRoot && window.MutationObserver) {
        var queued = false;
        window.__psCategoryFilterObserver = new MutationObserver(function () {
          if (queued) return;
          queued = true;
          window.requestAnimationFrame(function () {
            queued = false;
            var state = window.__psCategoryFilterState;
            if (!state) return;
            var currentWrapper = document.querySelector('#filters-wrapper > .filters-wrapper');
            var currentFilters = document.getElementById('filters');
            var staleFacet = currentFilters && state.facets.some(function (facet) {
              return facet.mode === 'group' && !currentFilters.querySelector('[data-ps-facet-section="' + CSS.escape(facet.target) + '"]');
            });
            if (currentWrapper && (currentFilters !== state.filters || staleFacet || !currentWrapper.querySelector('.ps-category-filter-toolbar'))) {
              state.closePanel(false);
              var oldToolbar = currentWrapper.querySelector('.ps-category-filter-toolbar');
              if (oldToolbar) oldToolbar.remove();
              document.querySelectorAll('.ps-category-filter-backdrop').forEach(function (node) { node.remove(); });
              initCategoryFilters();
            } else if (state.refresh) {
              state.refresh();
            }
          });
        });
        window.__psCategoryFilterObserver.observe(observedRoot, { childList: true, subtree: true });
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCategoryFilters, { once: true });
  } else {
    initCategoryFilters();
  }
})();
