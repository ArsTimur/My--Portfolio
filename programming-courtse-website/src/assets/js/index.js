import "../styles/colors.scss";
import "../styles/mixins.scss";
import "../styles/reset.scss";
import "../styles/styles.scss";


// 
// Responsive styles
// 
import '../styles/responsive.scss'

//
// JS
//
import scrollToBlock from "../js/modules/scroll-to-block.js";
import modalButtonsSettings from "./modules/modal-btn-settings.js";
import testControl from "./modules/test-control.js";
import mobileMenuNav from "./modules/burger-menu.js";

window.addEventListener("DOMContentLoaded", () => {
  mobileMenuNav();
  
  scrollToBlock('.arrow-down-img', '.which-technologies-learn');
  scrollToBlock('.link-whatll-learn', '.which-technologies-learn');
  scrollToBlock('.link-educ-process', '.features');
  scrollToBlock('.link-pricing', '.price-table-container');
  scrollToBlock('.link-contacts', '.footer-container');
  scrollToBlock('.foot-brand-logo', '.header')

  modalButtonsSettings();
  
  testControl(
    ".answer1-submit-btn",
    '.question1-options input[type="checkbox"]',
    [true, false, false],
    ".answer1-true-false-title"
  );
  testControl(
    ".answer2-submit-btn",
    '.question2-options input[type="checkbox"]',
    [false, true, false],
    ".answer2-true-false-title"
  );
  testControl(
    ".answer3-submit-btn",
    '.question3-options input[type="checkbox"]',
    [true, false, false],
    ".answer3-true-false-title"
  );
  testControl(
    ".answer4-submit-btn",
    '.question4-options input[type="checkbox"]',
    [false, false, true],
    ".answer4-true-false-title"
  );
  testControl(
    ".answer5-submit-btn",
    '.question5-options input[type="checkbox"]',
    [false, true, false],
    ".answer5-true-false-title"
  );

  
});
