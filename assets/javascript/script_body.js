/////// About_Div_4 ///////

"use strict";
const buttons = document.querySelectorAll(".button");

if (buttons.length) {
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      button.classList.toggle("active");

      let aSide = button.parentNode.firstElementChild;
      let bSide = aSide.nextElementSibling;
      console.log(aSide);
      if (aSide && bSide) {
        aSide.classList.toggle("hidden");
        bSide.classList.toggle("hidden");
      }
    });
  });
}



/////// Contact_Div_1 ///////


const validate = new window.JustValidate("#form");
validate
  .addField(
    "#name",
    [
      {
        rule: "required",
        errorMessage: "This field is required",
      },
      {
        rule: "minLength",
        value: 3,
        errorMessage: "Name is too short",
      },
      {
        rule: "maxLength",
        value: 10,
        errorMessage: "Name is too long",
      },
    ],
    {
      errorFieldCssClass: "error-field",
      errorLabelCssClass: "error-label",
      errorsContainer: "#name-errors",
    }
  )
  .addField(
    "#email",
    [
      {
        rule: "required",
        errorMessage: "This field is required",
      },
      {
        rule: "email",
        errorMessage: "Email is not valid",
      },
    ],
    {
      errorFieldCssClass: "error-field",
      errorLabelCssClass: "error-label",
      errorsContainer: "#email-errors",
    }
  )
  .addField(
    "#company_name",
    [
      {
        rule: "required",
        errorMessage: "This field is required",
      },
    ],
    {
      errorFieldCssClass: "error-field",
      errorLabelCssClass: "error-label",
      errorsContainer: "#company_name-errors",
    }
  )
  .addField(
    "#title",
    [
      {
        rule: "required",
        errorMessage: "This field is required",
      },
    ],
    {
      errorFieldCssClass: "error-field",
      errorLabelCssClass: "error-label",
      errorsContainer: "#title-errors",
    }
  )
  .addField(
    "#subject",
    [
      {
        rule: "required",
        errorMessage: "This field is required",
      },
    ],
    {
      errorFieldCssClass: "error-field",
      errorLabelCssClass: "error-label",
      errorsContainer: "#subject-errors",
    }
  );
