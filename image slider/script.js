
$(document).ready(function() 
{
    const $slider = $(".slider");
    const $images = $(".img");
    
    let currentIndex = 0; 

    const totalImages = $images.length; 
  
    updateSlider(); 
  
    $("#next").click(function() 
    {
        currentIndex = (currentIndex + 1) % totalImages;
        updateSlider();
    });
  
    $("#previous").click(function() 
    {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        updateSlider();
    });
  
    function updateSlider() 
    {
        const slideAmount = -currentIndex * 100;
        $slider.css("transform", `translateX(${slideAmount}%)`);
    }
});