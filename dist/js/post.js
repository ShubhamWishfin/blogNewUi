$(document).ready(function(){
    $(document).on('click','.accordion h2',function(){

        $('.accordion h2').find('i').removeClass('fa-chevron-up').addClass('fa-chevron-down');
        $(this).find('i').removeClass('fa-chevron-down').addClass('fa-chevron-up');
        

        $('.accordionContent').slideUp();
        $('.accordion').removeClass('bg-[#F6F8FC]').addClass('border-[#E2E8F0]').removeClass('border-transparent')
        
        $(this).closest('.accordion').addClass('bg-[#F6F8FC] border-transparent').removeClass('border-[#E2E8F0]');
        $(this).closest('.accordion').find('.accordionContent').slideDown();
    })
})