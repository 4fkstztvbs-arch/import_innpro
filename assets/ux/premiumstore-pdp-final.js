/*
 * =========================================================
 * PremiumStore.sk – PRODUCT DETAIL
 * FINAL STABLE VERSION
 * 2026-09-21
 *
 * FINAL baseline pred systematickou lokalizaciou produktov.
 * =========================================================
 */

(function () {
  'use strict';

  var BODY_CLASS = 'ps-pdp-v1';
  var BRAND_BASE_PATH =
    '/user/documents/upload/brand-';


  function getProductForm() {
    return document.getElementById(
      'product-detail-form'
    );
  }


  function isRealProductDetail() {
    return !!getProductForm();
  }


  function clean(value) {
    return String(value || '')
      .replace(/\s+/g, ' ')
      .trim();
  }


  function normalizeBrandName(value) {
    if (!value) {
      return '';
    }

    if (typeof value === 'string') {
      return clean(value);
    }

    if (typeof value === 'object') {
      return clean(
        value.name ||
        value.title ||
        value.label ||
        value.value ||
        ''
      );
    }

    return clean(value);
  }


  function getBrandFromShoptetDataLayer() {
    if (
      typeof window.getShoptetDataLayer !==
      'function'
    ) {
      return '';
    }

    try {
      var product =
        window.getShoptetDataLayer('product');

      if (!product) {
        return '';
      }

      if (
        Object.prototype.toString.call(product) ===
        '[object Array]'
      ) {
        product = product[0];
      }

      if (!product) {
        return '';
      }

      return normalizeBrandName(
        product.manufacturer ||
        product.brand ||
        product.manufacturerName
      );

    } catch (e) {
      return '';
    }
  }


  function getBrandFromPage() {

    var brandMeta =
      document.querySelector(
        'meta[itemprop="brand"]'
      );

    if (brandMeta) {
      var metaValue =
        brandMeta.getAttribute('content');

      if (metaValue) {
        return clean(metaValue);
      }
    }


    var brandElement =
      document.querySelector(
        '[itemprop="brand"]'
      ) ||
      document.querySelector(
        '.p-detail .manufacturer'
      ) ||
      document.querySelector(
        '.p-detail .brand'
      );


    if (brandElement) {

      var content =
        brandElement.getAttribute &&
        brandElement.getAttribute('content');

      if (content) {
        return clean(content);
      }

      return clean(
        brandElement.textContent
      );
    }


    return '';
  }


  function getBrandFromTitle() {

    var title =
      document.querySelector(
        '.p-data-wrapper h1, ' +
        '.p-data-wrapper .h1, ' +
        '.p-detail h1, ' +
        '.p-detail .h1'
      );


    if (!title) {
      return '';
    }


    var text =
      clean(title.textContent);


    /*
     * Bezpecny fallback iba pre znacky,
     * pre ktore mame vlastne logo.
     * Neskor sem mozeme pridavat dalsie.
     */

    if (/^bose\b/i.test(text)) {
      return 'Bose';
    }


    return '';
  }


  function getBrandName() {
    return (
      getBrandFromShoptetDataLayer() ||
      getBrandFromPage() ||
      getBrandFromTitle()
    );
  }


  function slugifyBrand(value) {

    var slug = clean(value)
      .toLowerCase();


    if (
      typeof slug.normalize ===
      'function'
    ) {
      slug = slug
        .normalize('NFD')
        .replace(
          /[\u0300-\u036f]/g,
          ''
        );
    }


    return slug
      .replace(/&/g, ' and ')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }


  function createBrandLogo(
    brandName,
    brandSlug
  ) {

    var wrapper =
      document.createElement('div');

    wrapper.className =
      'ps-brand-logo';

    wrapper.setAttribute(
      'data-brand',
      brandSlug
    );


    var image =
      document.createElement('img');

    image.src =
      BRAND_BASE_PATH +
      brandSlug +
      '.png';

    image.alt =
      'Logo ' +
      brandName;

    image.decoding =
      'async';


    image.addEventListener(
      'error',
      function () {

        /*
         * Ak logo pre znacku este nie je
         * nahrate, nevytvarame ziadnu
         * rozbitu ikonku ani fallback.
         */

        if (wrapper.parentNode) {
          wrapper.parentNode.removeChild(
            wrapper
          );
        }

      }
    );


    wrapper.appendChild(image);

    return wrapper;
  }


  function insertLogoIntoHeader(
    header,
    brandName,
    brandSlug
  ) {

    if (!header) {
      return;
    }


    if (
      header.querySelector(
        '.ps-brand-logo'
      )
    ) {
      return;
    }


    var title =
      header.querySelector('h1') ||
      header.querySelector('.h1');


    if (!title) {
      return;
    }


    var logo =
      createBrandLogo(
        brandName,
        brandSlug
      );


    if (title.nextSibling) {

      title.parentNode.insertBefore(
        logo,
        title.nextSibling
      );

    } else {

      title.parentNode.appendChild(
        logo
      );

    }

  }


  function enhanceBrand() {

    var brandName =
      getBrandName();

    if (!brandName) {
      return false;
    }


    var brandSlug =
      slugifyBrand(brandName);

    if (!brandSlug) {
      return false;
    }


    var desktopHeader =
      document.querySelector(
        '.p-detail-inner-header'
      );


    var mobileHeader =
      document.querySelector(
        '.p-detail-inner-header-mobile'
      );


    insertLogoIntoHeader(
      desktopHeader,
      brandName,
      brandSlug
    );


    insertLogoIntoHeader(
      mobileHeader,
      brandName,
      brandSlug
    );


    /*
     * Disco nema na kazdom PDP rovnaku header strukturu.
     * Na niektorych produktoch je viditelny H1 priamo
     * v .p-data-wrapper, preto pridavame bezpecny fallback.
     */

    var visibleDesktopTitle =
      document.querySelector(
        '.p-data-wrapper h1, ' +
        '.p-data-wrapper .h1'
      );


    if (
      visibleDesktopTitle &&
      visibleDesktopTitle.parentNode &&
      !visibleDesktopTitle.parentNode.querySelector(
        '.ps-brand-logo'
      )
    ) {

      var fallbackLogo =
        createBrandLogo(
          brandName,
          brandSlug
        );


      if (visibleDesktopTitle.nextSibling) {

        visibleDesktopTitle.parentNode.insertBefore(
          fallbackLogo,
          visibleDesktopTitle.nextSibling
        );

      } else {

        visibleDesktopTitle.parentNode.appendChild(
          fallbackLogo
        );

      }

    }


    document.body.setAttribute(
      'data-ps-brand',
      brandSlug
    );


    return true;
  }



  /* PDP V1.3 MOBILE ENHANCEMENTS */


  function classifyDetailRows() {

    var form =
      getProductForm();

    if (!form) {
      return;
    }


    var table =
      form.querySelector(
        '.detail-parameters'
      );


    if (!table) {
      return;
    }


    var rows =
      table.querySelectorAll('tr');


    for (
      var i = 0;
      i < rows.length;
      i++
    ) {

      var row =
        rows[i];


      var text =
        clean(
          row.textContent
        ).toLowerCase();


      if (
        text.indexOf(
          'možnosti doručenia'
        ) !== -1 ||
        text.indexOf(
          'moznosti dorucenia'
        ) !== -1
      ) {

        row.classList.add(
          'ps-pdp-row-shipping-options'
        );

      }


      if (
        text.indexOf('kód') === 0 ||
        text.indexOf('kod') === 0
      ) {

        row.classList.add(
          'ps-pdp-row-code'
        );

      }

    }

  }


  function ensureMobileBenefits() {

    if (
      document.querySelector(
        '.ps-mobile-benefits'
      )
    ) {
      return;
    }


    var form =
      getProductForm();


    if (!form) {
      return;
    }


    var benefits =
      document.createElement('div');


    benefits.className =
      'ps-mobile-benefits';


    benefits.setAttribute(
      'aria-label',
      'Výhody nákupu'
    );


    benefits.innerHTML =
      '<div class="ps-mobile-benefit">' +
        '<span class="ps-mobile-benefit-icon">✓</span>' +
        '<span class="ps-mobile-benefit-content">' +
          '<strong class="ps-mobile-benefit-title">Rýchle doručenie</strong>' +
          '<span class="ps-mobile-benefit-text">viac ako 3000 výdajných miest</span>' +
        '</span>' +
      '</div>' +

      '<div class="ps-mobile-benefit">' +
        '<span class="ps-mobile-benefit-icon">✓</span>' +
        '<span class="ps-mobile-benefit-content">' +
          '<strong class="ps-mobile-benefit-title">Bezpečné doručenie</strong>' +
          '<span class="ps-mobile-benefit-text">garancia nepoškodeného tovaru</span>' +
        '</span>' +
      '</div>' +

      '<div class="ps-mobile-benefit">' +
        '<span class="ps-mobile-benefit-icon">✓</span>' +
        '<span class="ps-mobile-benefit-content">' +
          '<strong class="ps-mobile-benefit-title">Bezproblémové vrátenie</strong>' +
          '<span class="ps-mobile-benefit-text">tovaru do 14 dní</span>' +
        '</span>' +
      '</div>' +

      '<div class="ps-mobile-benefit">' +
        '<span class="ps-mobile-benefit-icon">✓</span>' +
        '<span class="ps-mobile-benefit-content">' +
          '<strong class="ps-mobile-benefit-title">Doručenie do 2 dní</strong>' +
          '<span class="ps-mobile-benefit-text">na výdajné miesta alebo kuriérom</span>' +
        '</span>' +
      '</div>';


    form.insertAdjacentElement(
      'afterend',
      benefits
    );

  }



  /* PDP V1.4 MOBILE PARENT LINK */


  function ensureMobileParentLink() {

    if (
      document.querySelector(
        '.ps-mobile-parent-link'
      )
    ) {
      return;
    }


    var breadcrumb =
      document.querySelector(
        '.breadcrumbs.navigation-home-icon-wrapper'
      );


    if (!breadcrumb) {
      return;
    }


    /*
     * Posledny klikatelny breadcrumb pred produktom
     * je jeho bezprostredna nadradena kategoria.
     */

    var links =
      breadcrumb.querySelectorAll(
        'a[href]'
      );


    if (!links.length) {
      return;
    }


    var parentLink =
      links[links.length - 1];


    var label =
      clean(
        parentLink.textContent
      );


    if (!label) {
      return;
    }


    var mobileLink =
      document.createElement('a');


    mobileLink.className =
      'ps-mobile-parent-link';


    mobileLink.href =
      parentLink.href;


    mobileLink.setAttribute(
      'aria-label',
      'Späť do kategórie ' + label
    );


    var span =
      document.createElement('span');


    span.textContent =
      label;


    mobileLink.appendChild(
      span
    );


    breadcrumb.insertAdjacentElement(
      'afterend',
      mobileLink
    );

  }


  function enhanceProductDetail() {

    if (!isRealProductDetail()) {
      return;
    }


    document.body.classList.add(
      BODY_CLASS
    );


    enhanceBrand();

    classifyDetailRows();

    ensureMobileBenefits();

    ensureMobileParentLink();
  }


  var timer = null;


  function scheduleEnhance() {

    if (timer) {
      clearTimeout(timer);
    }


    timer = setTimeout(
      enhanceProductDetail,
      120
    );
  }


  if (
    document.readyState ===
    'loading'
  ) {

    document.addEventListener(
      'DOMContentLoaded',
      enhanceProductDetail
    );

  } else {

    enhanceProductDetail();

  }


  document.addEventListener(
    'ShoptetDataLayerUpdated',
    scheduleEnhance
  );


  // Product parameters can be refreshed after initial render. Keep this
  // observer inside the product form instead of scanning the entire page.
  var productForm = getProductForm();
  if (productForm && window.MutationObserver) {
    new MutationObserver(scheduleEnhance).observe(productForm, {
      childList: true,
      subtree: true
    });
  }

})();
