$(document).ready(function () {
    $('.postCardCarousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplaySpeed: 1500,
        autoplayHoverPause: true,
        margin: 0,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    $(window).resize(function () {
        if ($(window).width() >= 1024) {
            calculateHeight();
        }else{
            $('.feartureCardWrapper ').css('max-height', '100%').removeClass('overflow-y-scroll');
        }
    })
    if ($(window).width() >= 1024) {
        calculateHeight();
    }else{
        $('.feartureCardWrapper ').css('max-height', '100%').removeClass('overflow-y-scroll');
    }


    $('.cardWrapper .card:nth-child(5n)').each(function (index) {
        // Insert the offerCard after every 5th card
        $(this).after(`
        <div class="offerCard  flex flex-col border-[#E2E8F0] bg-[#f6f8fc] lg:w-[31.5%] md:w-[32%] sm:w-[47%] w-full  mt-7 p-5  border rounded-[4px] hover:shadow-md hover:shadow-[#E0E7F2]">
                <h2 class="text-lg  text-[#424B5A]">Get The <strong class="text-[#FF5733]">Best Offers</strong> For You!</h2>
                <ul class="text-[#424B5A] text-sm flex flex-col justify-between mt-4 offerList">
                        <li class="border-b border-dotted"><a target="_blank"  href="" class="flex items-center my-2"><img class="w-[31px]" src="./images/speed.svg" alt=""><span class="ml-3"><strong>Check CIBIL </strong> Score for <strong>Free</strong> </span></a></li>
                        <li class="border-b border-dotted"><a target="_blank"  href="" class="flex items-center my-2"><img class="w-[31px]" src="./images/piggiBank.svg" alt=""><span class="ml-3">Get Instant <strong> Personal Loan </strong> Approval</span></a></li>
                        <li class="border-b border-dotted"><a target="_blank"  href="" class="flex items-center my-2"><img class="w-[31px]" src="./images/creditCard.svg" alt=""><span class="ml-3">Apply for <strong> Credit Cards </strong> online</span></a></li>
                        <li class="border-b border-dotted"><a target="_blank"  href="" class="flex items-center my-2"><img class="w-[31px]" src="./images/home.svg" alt=""><span class="ml-3">Apply for <strong> Home Loan </strong> at lowest ROI</span></a></li>
                        <li class="border-b border-dotted"><a target="_blank"  href="" class="flex items-center my-2"><img class="w-[31px]" src="./images/notebook.svg" alt=""><span class="ml-3">Explore <strong> Mutual Funds </strong> </span></a></li>
                        <li class="border-b border-dotted"><a target="_blank"  href="" class="flex items-center my-2"><img class="w-[31px]" src="./images/blocks.svg" alt=""><span class="ml-3"><strong>Gold Loan </strong></span></a></li>
                </ul>
        </div>
        `);
    });

    $(document).on('click', '.pagination li a', function () {
        let isDisabled = $(this).hasClass('more');
        if (!isDisabled) {
            $('.pagination li a').removeClass('bg-[#FF5733] text-white border-transparent')
            $(this).addClass('bg-[#FF5733] text-white border-transparent')
        }
    })



    $("input[type='range']").on("input", function (event) {
        var tempSliderValue = parseFloat($(this).val());
        var sliderId = $(this).attr("id");
        var $valueElement = $("." + sliderId + "Value");

        if (sliderId == 'LoanAmount') {
            let val = indianFormatNumber(tempSliderValue)
            $valueElement.text(val);

        } else {
            $valueElement.text(tempSliderValue);
        }

        var progress = (tempSliderValue / $(this).attr("max")) * 100;
        $(this).css("background", "linear-gradient(to right, #FF5733 " + progress + "%, #ccc " + progress + "%)");

    });

    $(document).on('click', '.card, .featureCard, .postCard', function (e) {
        // Check if the click event originated from an anchor tag
        if (!$(e.target).hasClass('internalLink')) {
            let url = $(this).attr("data-target");
            window.open(
                url,
                '_blank' 
            );
        }
    });
    

});  // jquery function end

function calculateHeight() {
    let firstCardHeight = $('.featureCard').eq(0).outerHeight();
    let secondCardHeight = $('.featureCard').eq(1).outerHeight();
    $('.feartureCardWrapper ').css('max-height', (firstCardHeight + secondCardHeight + 30)).addClass('overflow-y-scroll');
}

function indianFormatNumber(val) {
    var x = val;
    x = x.toString();
    var afterPoint = "";
    if (x.indexOf(".") > 0) afterPoint = x.substring(x.indexOf("."), x.length);
    x = Math.floor(x);
    x = x.toString();
    var lastThree = x.substring(x.length - 3);
    var otherNumbers = x.substring(0, x.length - 3);
    if (otherNumbers != "") lastThree = "," + lastThree;
    var res =
        otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") +
        lastThree +
        afterPoint;
    return res;
};