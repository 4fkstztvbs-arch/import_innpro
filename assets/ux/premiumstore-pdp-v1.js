/*
 * PremiumStore.sk – Product Detail v1
 * 2026-09-21
 *
 * JS je zamerne minimalny:
 * - overi, ze sme na skutocnom PDP
 * - aktivuje izolovanu CSS vrstvu .ps-pdp-v1
 * - zisti vyrobcu
 * - vlozi logo znacky pod nazov produktu
 *
 * Nemanipuluje s:
 * - galeriou
 * - zoomom
 * - variantmi
 * - kosikom
 * - cenami
 * - skladovostou
 * - popisom
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


  function getBrandName() {
    return (
      getBrandFromShoptetDataLayer() ||
      getBrandFromPage()
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


  function enhanceProductDetail() {

    if (!isRealProductDetail()) {
      return;
    }


    document.body.classList.add(
      BODY_CLASS
    );


    enhanceBrand();
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


  /*
   * Niektore casti produktu Shoptet
   * dorenderuje po prvom DOMContentLoaded.
   * Observer je debounceovany a funkcia
   * je idempotentna.
   */

  var observer =
    new MutationObserver(
      scheduleEnhance
    );


  observer.observe(
    document.documentElement,
    {
      childList: true,
      subtree: true
    }
  );

})();
