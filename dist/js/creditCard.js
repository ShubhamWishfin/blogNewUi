$(document).ready(function () {

    $(document).on('click','.accordion h2',function(){

        $('.accordion h2').find('i').removeClass('fa-chevron-up').addClass('fa-chevron-down');
        $(this).find('i').removeClass('fa-chevron-down').addClass('fa-chevron-up');
        

        $('.accordionContent').slideUp();
        $('.accordion').removeClass('bg-[#F6F8FC]').addClass('border-[#E2E8F0]').removeClass('border-transparent')
        
        $(this).closest('.accordion').addClass('bg-[#F6F8FC] border-transparent').removeClass('border-[#E2E8F0]');
        $(this).closest('.accordion').find('.accordionContent').slideDown();
    })


    var date = new Date();
    var m = date.getMonth(),
        d = date.getDate(),
        y = date.getFullYear();
    var defaultyear = y - 23;
    $('#DOB').datepicker({
        dateFormat: 'yy-mm-dd',
        changeMonth: true,
        changeYear: true,
        yearRange: "-58:+0",
        maxDate: "-21y",
        defaultDate: new Date(defaultyear, m, d)
    });


    $('.form-control').not('.fakeinput').on('keyup blur', function (e) {
        $(this).closest('.form-group').removeClass('has-error');
        $(this).removeClass("invalid");
    });

    $('input[type="checkbox"],input[type="radio"]').on('click', function () {
        $(this).removeClass("invalid");
        $(this).closest('.form-group').removeClass('has-error');
        $(this).closest('.radio-fields').removeClass('invalid');
        $(this).closest('.check-field').removeClass('invalid');
    });

    $('select').selectmenu();
    $('select').on('change selectmenuchange', function () {
        $(this).closest('.form-group').removeClass('has-error');
    });
    $(".form-group .ui-selectmenu-button").on("focus", function () {
        $(this).closest(".form-group").addClass("is-focused");
    });
    $(".form-group .ui-selectmenu-button").on("focusout", function () {
        $(this).closest(".form-group").removeClass("is-focused");
    });

    $(".form-control").focusin(function () {
        $(this).closest(".form-group").addClass("is-focused");
    });
    $(".form-control").focusout(function () {
        $(this).closest(".form-group").removeClass("is-focused");
    });

    $("#City").focusin(function () {
        $(".otherFields").slideDown();

    });

    $(".CC_Holder") // select the radio by its id
        .change(function () { // bind a function to the change event
            var val = $(this).val(); // retrieve the value
            if (val == 1) {
                $('.CreditCardBank').slideDown();
            }
            else {
                $('.CreditCardBank').slideUp();
            }
        });




    $(document).on('click', '.closePopup', function () {
        $('#TandC').hide();
    })
    $(document).on('click', '#tnc', function () {
        $('#TandC').show();
    })


    // Validator




    $.validator.addMethod("alphabetsOnly", function (value, element) {
        // Regular expression to match company name (alphabets, spaces, and certain special characters)
        return this.optional(element) || /^[a-zA-Z\s.'\-&]+$/.test(value);
    }, "Invalid name.");
    $.validator.addMethod("email", function (value, element) {
        return this.optional(element) || /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
    }, 'Enter valid email address');

    $.validator.addMethod("dobValidator", function (value, element) {
        // Regular expression to match date format (yyyy-mm-dd)
        var dateFormat = /^\d{4}-\d{2}-\d{2}$/;

        // Check if the value matches the date format
        if (!dateFormat.test(value)) return false;

        // Extract year, month, and day from the date string
        var parts = value.split("-");
        var year = parseInt(parts[0], 10);
        var month = parseInt(parts[1], 10) - 1; // Month is 0-indexed in Date object
        var day = parseInt(parts[2], 10);

        // Create a Date object with the extracted values
        var date = new Date(year, month, day);

        // Check if the date object represents a valid date
        return date.getFullYear() === year && date.getMonth() === month && date.getDate() === day;
    }, "Please enter a valid date of birth in the format yyyy-mm-dd.");


    $.validator.addMethod("MobileNumber", function (a, b) {
        return this.optional(b) || a.match(/^[6-9]\d+$/) && a.length >= 10
    }, "* The number should start only 6 to 9");

    $.validator.addMethod("TermsAndCondition", function (a, b, c) {
        return $(".terms-condition:checkbox:checked").length > 0
    }, "You must accept terms and conditions!");

    $.validator.addMethod("companyValidation", function (value, element) {
        // Regular expression to match company name (alphabets, spaces, and certain special characters)
        return this.optional(element) || /^[a-zA-Z\s.'\-&]+$/.test(value);
    }, "Please enter a valid company name.");


    $("#creditcardswidget").validate({
        ignore: [],
        errorClass: 'invalid',
        errorPlacement: function (error, element) {
            var errorText = error.text();
            if (element.closest('.form-group').find('.help-block').length < 1) {
                element.closest('.form-group').append('<span class="help-block">');
            }
            element.closest('.form-group').addClass('has-error');
            element.closest('.form-group').find('.help-block').html(errorText);
        },
        highlight: function (element, errorClass) {
            $(element).addClass(errorClass).parent().prev().children("select").addClass(errorClass);
            if ($(element).attr('type') == 'radio' || $(element).attr('type') == 'checkbox') {
                $(element).parent().parent().addClass(errorClass);
            }
        },
        rules: {
            AnnualIncome: {
                required: true,
                number: true,
                min: 100000,
            },
            Occupation: {
                required: true
            },
            CompanyName: {
                required: true,
                companyValidation: true,
                minlength: 3,
                maxlength: 100,
            },
            City: {
                required: true,
                minlength: 2,
                maxlength: 100,
                alphabetsOnly: true,
            },
            FirstName: {
                required: true,
                alphabetsOnly: true,
                minlength: 3,
                maxlength: 100,
            },
            LastName: {
                required: true,
                alphabetsOnly: true,
                minlength: 3,
                maxlength: 100,
            },
            MobileNo: {
                required: true,
                MobileNumber: true,
                number: true,
                minlength: 10,
                maxlength: 10,
            },
            EmailID: {
                required: true,
                email: true,
            },
            DOB: {
                required: true,
                dobValidator: true,
            },
            CC_Holder: {
                required: true
            },
            CreditCardBank: {
                required: '.CC_Holder[value="1"]:checked'
            },
            accept: {
                required: true,
            },

        },
        submitHandler: function (form) {
            // form.submit();
            $('#submitbutton').hide();
            $('#loadingBtn').show();
            alert('form submitted')
        }
    });
})

function CharsetKeyOnly(evt) {
    var k;
    document.all ? k = evt.keyCode : k = evt.which;
    return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || k == 0 || k == 9);
}

function numOnly(evt) {
    var k;
    document.all ? k = evt.keyCode : k = evt.which;
    return (k == 0 || k == 9 || k == 8 || k == 32 || (k >= 48 && k <= 57));
}
