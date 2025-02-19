$(document).ready(function () {
  function convertTabsToDropdown() {
    if ($(window).width() < 992) {
      if (!$(".mobileDropdownTab .dropdown").length) {
        var dropdown = $(
          '<div class="dropdown"><button class="btn btn-secondary dropdown-toggle" type="button" id="mobileDropdownMenu" data-bs-toggle="dropdown" aria-expanded="false"><span class="line"></span><span>Menü</span></button><ul class="dropdown-menu" aria-labelledby="mobileDropdownMenu"></ul></div>'
        );

        $(".mobileDropdownTab .nav-item").each(function () {
          var link = $(this).find("a");
          var dropdownItem = $(
            '<li><a class="dropdown-item" href="' +
              link.attr("href") +
              '">' +
              link.text() +
              "</a></li>"
          );
          if (link.hasClass("active")) {
            dropdownItem.find("a").addClass("active");
          }
          dropdown.find(".dropdown-menu").append(dropdownItem);
        });

        $(".mobileDropdownTab").html(dropdown);
      }
    } else {
      if (!$(".mobileDropdownTab .nav-tabs").length) {
        var tabList = $(
          '<ul class="nav nav-tabs customTab standartTab navLinkTab" id="corporateTab"></ul>'
        );

        $(".mobileDropdownTab .dropdown-item").each(function () {
          var link = $(this);
          var navItem = $(
            '<li class="nav-item"><a class="nav-link" href="' +
              link.attr("href") +
              '">' +
              link.text() +
              "</a></li>"
          );
          if (link.hasClass("active")) {
            navItem.find("a").addClass("active");
          }
          tabList.append(navItem);
        });

        $(".mobileDropdownTab").html(tabList);
      }
    }
  }

  convertTabsToDropdown();
  $(window).resize(convertTabsToDropdown);
});
