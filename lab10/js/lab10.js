// Lab 10: JavaScript for the Web
// Generating letters to form dialouge by clicking a button or twp
//Author: Celeste Hernandez
// Date:May 12, 2024

//function to generate random letters
function generateSimlish(){
    const text="Hi Im Timmy J. I was born on May 13. Like I just wanna say that like I have zero clue on what I am or what I am even doing here. Oh my mother is not even rea hahahahahaahahah. I like to dance and stuff and like I might end up repeating myself at some point after you click that button for a while ahahahahahaha. I am suppose to be ssaying random stuff. My favorite color is jade and orange, such nice colors.My aunt Emily is really close with my mother. yah she helped name me isnt that greate. Im a pro dance if I do say so. Oh whait Im just suppose to say random shit.... hahahahahahahahah/.... kjadsfih k hdoifkdj idfhgbgva zmzvbchdgw kdfbcnaskhiegf hskjdfhuweg  afhaw djfds ajfkla c ddkjf ac fhjkasdfjd shjkaf ahfkdjdkjsndjkfn djfksa fjd jdschd c chjdkhfj dsncjkdn jkfkesafh  ndsjkc jdkshfudschkjd n dsjkfhk sjcnsdk vuds akdfh kdjshf jkds fjfhkajsdhf jk c djfllkasjf kdjfkldsj fkdjvkldshflsjckdjcklj vkl fdjlfkd jkdj hfdhf vcn udfh kjdnj vudsihf euw Bye"
    const min= 3;
    const max= 100;
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
    // Get a random starting index to slice the Lorem Ipsum text
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    // Generate the random Lorem Ipsum-like text
    return text.slice(randStart, randStart + randLen);
}

//click listener for button
$("#yapping-generator").click(function(){
    // get new fake dialouge
    const newText=generateSimlish();
    //append a new div to our output div
    $("#outupt").append('<div class="text"><p' + newText + '</p></div>');
});

function respond(){
    //retrive user's reply
    let reply= window.prompt("Type reply:");
    //return reply
    return reply;
};

//when button is clicked, run 'respond' funciton
$("#respond").clikc(function(){
    //get the reply
    let newReply=respond();
    //append as a new div to the output div
    $("#output").append('<div id="parent"><div class="reply"><p>'+ newReply +'</p></div></div>');
});