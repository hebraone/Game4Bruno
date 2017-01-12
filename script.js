
var $boxResult1 = $("#result1"),
        $boxResult2 = $("#result2"),
        $boxResult3 = $("#result3"), 
        sumAdd, sumSub;
  

  $('#start').click(function newGame() {

    var randomNumber1 = 0 + Math.floor(Math.random() * 10),
        randomNumber2 = 0 + Math.floor(Math.random() * 10),
        $signArray = ['+', '-'],
        $randomSign = Math.floor(Math.random() * $signArray.length),
        $box1 = $("#box1"),
        $box2 = $("#box2"),
        $boxSign = $("#boxSign"),
        $resultArray = [$boxResult1, $boxResult2, $boxResult3],
        $randomResultbox = Math.floor(Math.random() * $resultArray.length);
        $boxSign.text($signArray[$randomSign]);  
        
        $box1.text(randomNumber1);
        $box2.text(randomNumber2);
         
    
   if($signArray[$randomSign] == "+"){
        sumAdd = (randomNumber1 + randomNumber2); 
        if ($randomResultbox == 0) {
            $boxResult1.text(sumAdd);
            $boxResult2.text(sumAdd - 2);
            $boxResult3.text(sumAdd + 2);
        } else if ($randomResultbox == 1) {
            $boxResult2.text(sumAdd);
            $boxResult1.text(sumAdd - 2);
            $boxResult3.text(sumAdd + 2);
        } else {
            $boxResult3.text(sumAdd);
            $boxResult2.text(sumAdd - 2);
            $boxResult1.text(sumAdd + 2);
        }
    } else {
        sumSub = (randomNumber1 - randomNumber2); 
        if ($randomResultbox == 0) {
            $boxResult1.text(sumSub);
            $boxResult2.text(sumSub - 2);
            $boxResult3.text(sumSub + 2);
        } else if ($randomResultbox == 1) {
            $boxResult2.text(sumSub);
            $boxResult1.text(sumSub - 2);
            $boxResult3.text(sumSub + 2);
        } else {
            $boxResult3.text(sumSub);
            $boxResult2.text(sumSub - 2);
            $boxResult1.text(sumSub + 2);
        }
    };
});

$boxResult1.click(function(){
    
       
  if( $boxResult1.text() == sumAdd || $boxResult1.text() == sumSub ){
        $("#goodJob").fadeIn(2000);
        $("#goodJob").hide(2000); 
       
    } else {
        $("#badJob").fadeIn(2000);
        $("#badJob").hide(2000); 
    }
 });

$boxResult2.click(function(){
    
       
  if( $boxResult2.text() == sumAdd || $boxResult2.text() == sumSub ){
        $("#goodJob").fadeIn(2000);
        $("#goodJob").hide(2000);  
        
    } else {
        $("#badJob").fadeIn(2000);
        $("#badJob").hide(2000); 
    }
 });

$boxResult3.click(function(){
     
        
  if( $boxResult3.text() == sumAdd || $boxResult3.text() == sumSub ){
        $("#goodJob").fadeIn(2000);
        $("#goodJob").hide(2000); 
       
    } else {
        $("#badJob").fadeIn(2000);
        $("#badJob").hide(2000); 
      
    }
  
        
});  



    
 
