$(document).ready(function () {
  function validateEmail(email) {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|co)$/.test(email);
  }

  function clearInvalidFeedback(input, feedbackElements) {
    input.removeClass("is-invalid");
    feedbackElements.forEach((el) => el.hide());
  }

  function setupEmailValidation(form) {
    const emailInput = form.find("#email");
    const invalidFeedback = form.find(".invalid-tooltip");
    const invalidFeedbackFormat = form.find(".invalid-tooltip-format");

    emailInput.on("input", function () {
      const inputValue = emailInput.val().trim();
      const isValid = validateEmail(inputValue);

      if (inputValue === "") {
        emailInput.addClass("is-invalid");
        invalidFeedback.show();
        invalidFeedbackFormat.hide();
      } else if (!isValid) {
        emailInput.addClass("is-invalid");
        invalidFeedback.hide();
        invalidFeedbackFormat.show();
      } else {
        clearInvalidFeedback(emailInput, [invalidFeedback, invalidFeedbackFormat]);
      }
    });
  }

  const form = $(".form");

  if (form.length) {
    setupEmailValidation(form);

    form.on("submit", function (e) {
      e.preventDefault();
      let isValid = true;

      const inputs = form.find("input, textarea");
      inputs.each(function () {
        const input = $(this);
        if (input.val().trim() === "") {
          input.addClass("is-invalid");
          isValid = false;
        } else {
          input.removeClass("is-invalid");
        }
      });

      const emailInput = form.find("#email");
      const emailValue = emailInput.val().trim();
      const invalidFeedback = form.find(".invalid-tooltip");
      const invalidFeedbackFormat = form.find(".invalid-tooltip-format");

      if (!validateEmail(emailValue)) {
        emailInput.addClass("is-invalid");
        invalidFeedback.show();
        invalidFeedbackFormat.hide();
        isValid = false;
      } else {
        clearInvalidFeedback(emailInput, [invalidFeedback, invalidFeedbackFormat]);
      }

      if (isValid) {
        Swal.fire({
          icon: "success",
          title: "Başarılı!",
          text: "Formunuz başarıyla gönderildi.",
        });
        form[0].reset();
      }
    });

    form.find("input, textarea").on("focus", function () {
      clearInvalidFeedback($(this), [
        $(this).siblings(".invalid-tooltip"),
        $(this).siblings(".invalid-tooltip-format"),
      ]);
    });
  }

  // Telefon Numarası Maskesi - 10 haneli ve başında 0 olmadan
  $(".phoneMask").on("input", function () {
    let value = $(this).val().replace(/\D/g, ""); // Sadece rakamları al
    if (value.startsWith("0")) {
      value = value.substring(1); // Başta 0 varsa kaldır
    }
    if (value.length > 10) {
      value = value.substring(0, 10); // 10 karakterle sınırla
    }
    $(this).val(value);
  });
});



// Text Mask doğrulama işlemi
$(".textMask").mask("A", {
  translation: {
    A: {
      pattern: /[A-Za-zÇçĞğİıÖöŞşÜü ]/,
      recursive: true,
    },
  },
});


$(".inputFileWrapper input[type='file']").on("change", function () {
  const fileInput = $(this);
  const fileNameElement = fileInput.parents(".inputFileWrapper").find(".file-name");
  const file = this.files[0];

  if (file) {
    const fileName = file.name;
    fileNameElement.text(fileName).addClass("has-file");
  } else {
    fileNameElement.text("Choose file...").removeClass("has-file");
  }
});