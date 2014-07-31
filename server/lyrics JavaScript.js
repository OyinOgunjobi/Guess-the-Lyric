/**
 * Created by Knowhow on 29/07/2014.
 */
//var difficulty;
//wordNum starts at 0
/* Make sure I toUpperCase() the lyrics, so they all match*/
var charSpace = 0;
var lyrics = [];
//var files= [];
var numFiles=10;
var options=[];
var foundWord;
//var probability = [];
var seen;
var seenPossibilities = [];
var possibilities = [];
var count;
var total;
var actualWord;
var nextWord;
var possible;
var choice;
var fileNum = 0;//parseInt(numFiles*Math.random());
var start;
var textSoFar="";





function importLyrics(){
  //  console.log("Import lyrics is being called");
    /*for (i=0;i<numFiles;i++){
        files[i]=new File(i + ".txt");

    }*/

    lyrics[0]="Am I wrong for thinking out the box from where I stay? Am I wrong for saying that I choose another way? I ain't trying to do what everybody else doing. Just cause everybody doing what they all do. If one thing I know, I'll fall but I'll grow. I'm walking down this road of mine, this road that I call home. So am I wrong? For thinking that we could be something for real? Now am I wrong? For trying to reach the things that I can't see? But that's just how I feel, That's just how I feel, That's just how I feel, Trying to reach the things that I can't see. Am I tripping for having a vision? My prediction: I'ma be on the top of the world. Walk your walk and don't look back, always do what you decide. Don't let them control your life, that's just how I feel. Fight for yours and don't let go, don't let them compare you, no Don't worry, you're not alone, that's just how we feel. Am I wrong? (Am I wrong?) For thinking that we could be something for real? (Oh yeah yeah yeah) Now am I wrong? For trying to reach the things that I can't see? (Oh yeah yeah yeah) But that's just how I feel, That's just how I feel, That's just how I feel. Trying to reach the things that I can't see. If you tell me I'm wrong, wrong. I don't wanna be right, right If you tell me I'm wrong, wrong. I don't wanna be right. I don't wanna be right. Am I wrong? For thinking that we could be something for real? Now am I wrong? For trying to reach the things that I can't see? But that's just how I feel, That's just how I feel That's just how I feel Trying to reach the things that I can't see. So am I wrong? (Am I wrong?) For thinking that we could be something for real? (Oh yeah yeah yeah) Now am I wrong? (Am I wrong?) For trying to reach the things that I can't see? (Oh yeah yeah yeah) But that's just how I feel. That's just how I feel. That's just how I feel Trying to reach the things that I can't see".toUpperCase();
    lyrics[1]="Saturday morning jumped out of bed And put on my best suit. Got in my car raced like a jet. All the way to you. Knocked on your door with heart in my hand To ask you a question Cause I know that you're an old fashioned man. Yeah, yeah. Can I have your daughter for the rest of my life? Say yes, say yes, cause I need to know. You say I'll never get your blessings till the day I die. Tough luck my friend but the answer is No! Why you gotta be so rude. Don't you know I'm human too. Why you gotta be so rude. I'm gonna marry her anyway. Marry that girl. Marry her anyway. Marry that girl No matter what you say. Marry that girl And we'll be a family. Why you gotta be so... rude. I hate to do this you leave no choice. I can't live without her. Love me or hate me we will be boys Standing at that altar Or we will run away To another galaxy you know. You know she's in love with me. She will go anywhere I go. Can I have your daughter for the rest of my life? Say yes, say yes, cause I need to know. You say I'll never get your blessings till the day I die. Tough luck my friend but the answer is No! Why you gotta be so rude. Don't you know I'm human too. Why you gotta be so rude. I'm gonna marry her anyway. Marry that girl. Marry her anyway. Marry that girl. No matter what you say Marry that girl And we'll be a family. Why you gotta be so... rude... rude...".toUpperCase();
    lyrics[2]="Guess it's true I'm not good at a one nightstand but I still need love cause I'm just a man these night's never seem to go to plan I don't want you to leave. will you hold my hand? Oh won't you stay with me? Cause your all I need. This ain't love it's clear to see. But darling stay with me. Why am I so emotional? No it's not a good look gain some self control deep down I know this never works but you can lay with me so it doesn't hurt. Oh won't you stay with me? Cause your all I need. This ain't love it's clear to see. But darling stay with me. (Oooh whoa ooh) Oh won't you stay with me? Cause you're all I need. This ain't love it's clear to see. But darling stay with me. Oh won't you stay with me? Cause you're all I need. This ain't love it's clear to see. But darling stay with me".toUpperCase();
    lyrics[3]="Uh huh! It's Iggy Iggs! I got one more problem with you girl. One less one less Problem. Hey baby even though I hate ya! I wanna love ya. I want you! And even though I can't forgive you. I really want ta. I want you! Tell me, tell me baby. Why can't you leave me? Cause even though I shouldn't want it. I gotta have it. I want you! Head in the clouds. Got no weight on my shoulders. I should be wiser And realize that I've got. One less problem without ya! I got One less problem without ya! I got One less problem without ya! I got one less, one less problem. One less problem without ya. I got One less problem without ya! I got One less problem without ya! I got one less, one less problem. I know you're never gonna wake up. I gotta give up But it's you! I know I shouldn't ever call back Or let you come back But it's you! Every time you touch me And say you love me. I get a little bit breathless. I shouldn't want it But it's you! Head in the clouds. Got no weight on my shoulders. I should be wiser And realize that I've got. It's Iggy Iggs! Uh! What you got? Smart money bettin'. I'll be better off without you. In no time I'll be forgettin' all about you. You saying that you know But I really really doubt you Understand my life is easy When I ain't around you. Iggy Iggy. To biggie to be here stressin'. I'm thinkin' I love the thought of you More than I love your presence And the best thing now Is probably for you to exit. I let you go. Let you back. I finally learned my lesson! No half-stepping. Either you want it or you just playin'. I'm listening to you knowin'. I can't believe what you're sayin'. There's a million you's baby boo So don't be dumb. I got 99 problems But you won't be one. Like what! One less. one less problem. One less. one less problem. Head in the clouds. Got no weight on my shoulders. I should be wiser And realize that I've got (I've got).".toUpperCase();
    lyrics[4]="First thing first I'm the realest (realest). Drop this and let the whole world feel it (let them feel it). And I'm still in the murda bizness. I can hold you down, like I'm givin' lessons in physics. You should want a bad bitch like this. Drop it low and pick it up just like this. Cup of Ace, cup of Goose, cup of Cris. High heels, somethin' worth a half a ticket on my wrist. Takin' all the liquor straight, never chase that. Rooftop like we bringin' '88 back. Bring the hooks in, where the bass at? Champagne spillin', you should taste that. I'm so fancy. You won't have enough. I'm in the fast lane, from LA to Tokyo. I'm so fancy. Can you taste this gold? Remember my name [?]. I said baby, I do this, I thought that, you knew this. Can't stand no haters and honest, the truth is. And my flow retarded, they speaked it, depart it. Swagger on super, I can't shop at no department. Better get my money on time, if they not money, decline. And swear I meant that there so much that they give that line a rewind. So get my money on time, if they not money, decline. I just can't worry 'bout no haters, gotta stay on my grind. Now tell me, who dat, who dat? That do that, do that. Put that paper over all, I thought you knew that, knew that. I be the I-G-G-Y, put my name in bold. I been workin', I'm up in here with some change to throw. I'm so fancy. You won't have enough. I'm in the fast lane, from LA to Tokyo. I'm so fancy. Can you taste this gold? Remember my name [?] Trashed the hotel. Let's get drunk on the mini bar. Make the phone call. Feels so good getting what I want. Yeah, keep up [?] [?] is swinging, we don't give a fuck. Film star, yeah, [?] Classic, expensive, you don't get to touch. I'm so fancy. You won't have enough. I'm in the fast lane, from L.A to Tokyo. I'm so fancy. Can you taste this gold? Remember my name".toUpperCase();
    lyrics[5]="When I met you in the summer To my heartbeat's sound. We fell in love As the leaves turned brown And we can be together baby As long as skies are blue. You act so innocent now But you lied so soon When i met you in the summer. When I met you in the summer To my heartbeat's sound. We fell in love As the leaves turned brown. And we can be together baby As long as skies are blue. You act so innocent now But you lied so soon When i met you in the summer. When I met you in the summer. Summer".toUpperCase();
    lyrics[6]="I knew you were. You were gonna come to me. And here you are. But you better choose carefully ‘Cause I’m capable of anything. Of anything and everything. Make me your Aphrodite. Make me your one and only. Don’t make me your enemy, your enemy, your enemy. So you wanna play with magic. Boy, you should know whatcha falling for. Baby do you dare to do this Cause I’m coming atcha like a dark horse. Are you ready for, ready for A perfect storm, perfect storm. Cause once you’re mine, once you’re mine There’s no going back. Mark my words. This love will make you levitate. Like a bird. Like a bird without a cage But down to earth. If you choose to walk away, don’t walk away. It’s in the palm of your hand now baby. It’s a yes or no, no maybe. So just be sure before you give it up to me.Up to me, give it up to me. So you wanna play with magic. Boy, you should know whatcha falling for. Baby do you dare to do this Cause I’m coming atcha like a dark horse. Are you ready for, ready for A perfect storm, perfect storm. Cause once you’re mine, once you’re mine There’s no going back. She’s a beast. I call her Karma. She eat your heart out Like Jeffrey Dahmer. Be careful. Try not to lead her on. Shawty’s heart was on steroids Cause her love was so strong. You may fall in love When you meet her. If you get the chance you better keep her. She swears by it but if you break her heart. She turn cold as a freezer. That fairy tale ending with a knight in shining armor. She can be my Sleeping Beauty. I’m gon’ put her in a coma. Woo! Damn I think I love her. Shawty so bad. I’m sprung and I don’t care. She got me like a roller coaster. Turn the bedroom into a fair. Her love is like a drug. I was tryna hit it and quit it. But lil’mama so dope. I messed around and got addicted. So you wanna play with magic. Boy, you should know whatcha falling for. Baby do you dare to do this. Cause I’m coming atcha like a dark horse. Are you ready for, ready for. A perfect storm, perfect storm.Cause once you’re mine, once you’re mine There’s no going back".toUpperCase();
    lyrics[7]="What would I do without your smart mouth. Drawing me in, and you kicking me out. Got my head spinning, no kidding, I can’t pin you down. What’s going on in that beautiful mind. I’m on your magical mystery ride And I’m so dizzy, don’t know what hit me, but I’ll be alright. My head’s under water But I’m breathing fine. You’re crazy and I’m out of my mind. Cause all of me Loves all of you. Love your curves and all your edges. All your perfect imperfections. Give your all to me. I’ll give my all to you. You’re my end and my beginning. Even when I lose I’m winning Cause I give you all of me And you give me all of you. How many times do I have to tell you Even when you’re crying you’re beautiful too. The world is beating you down, I’m around through every mood. You’re my downfall, you’re my muse, My worst distraction, my rhythm and blues. I can’t stop singing, it’s ringing, in my head for you. Cards on the table, we’re both showing hearts. Risking it all, though it’s hard. I give you all of me And you give me all of you.".toUpperCase();
    lyrics[8]="I miss the taste of a sweeter life. I miss the conversation. I’m searching for a song tonight. I’m changing all of the stations. I like to think that we had it all. We drew a map to a better place But on that road I took a fall. Oh baby why did you run away? I was there for you In your darkest times. I was there for you In your darkest night. But I wonder where were you When I was at my worst. Down on my knees And you said you had my back So I wonder where were you When all the roads you took came back to me. So I’m following the map that leads to you. The map that leads to you. Ain't nothing I can do. The map that leads to you. Following, following, following to you. The map that leads to you. Ain't nothing I can do. The map that leads to you. Following, following, following. I hear your voice in my sleep at night. Hard to resist temptation 'Cause something strange has come over me And now I can’t get over you. No, I just can’t get over you. I was there for you In your darkest times. I was there for you In your darkest night. But I wonder where were you When I was at my worst. Down on my knees And you said you had my back So I wonder where were you When all the roads you took came back to me. So I’m following the map that leads to you. The map that leads to you. Ain't nothing I can do. The map that leads to you. Following, following, following to you. The map that leads to you. Ain't nothing I can do. The map that leads to you. Oh oh oh. Oh oh oh. Yeah yeah yeah. Oh oh. Oh, I was there for you Oh, in your darkest time. Oh, I was there for you Oh, in your darkest night. Oh, I was there for you Oh, in your darkest time. Oh, I was there for you Oh, in your darkest night. But I wonder where were you When I was at my worst. Down on my knees And you said you had my back So I wonder where were you When all the roads you took came back to me. So I’m following the map that leads to you. The map that leads to you. Ain't nothing I can do. The map that leads to you. Following, following, following to you. The map that leads to you. Ain't nothing I can do. The map that leads to you. Following, following, following.".toUpperCase();
    lyrics[9]="I knew you were. You were gonna come to me And here you are But you better choose carefully ‘Cause I’m capable of anything. Of anything and everything. Make me your Aphrodite. Make me your one and only. Don’t make me your enemy, your enemy, your enemy. So you wanna play with magic. Boy, you should know whatcha falling for. Baby do you dare to do this Cause I’m coming atcha like a dark horse. Are you ready for, ready for A perfect storm, perfect storm Cause once you’re mine, once you’re mine There’s no going back. Mark my words. This love will make you levitate Like a bird. Like a bird without a cage But down to earth. If you choose to walk away, don’t walk away. It’s in the palm of your hand now baby. It’s a yes or no, no maybe So just be sure before you give it up to me. Up to me, give it up to me. So you wanna play with magic. Boy, you should know whatcha falling for. Baby do you dare to do this Cause I’m coming atcha like a dark horse. Are you ready for, ready for A perfect storm, perfect storm Cause once you’re mine, once you’re mine There’s no going back. She’s a beast. I call her Karma. She eat your heart out. Like Jeffrey Dahmer. Be careful. Try not to lead her on. Shawty’s heart was on steroids. Cause her love was so strong. You may fall in love. When you meet her. If you get the chance you better keep her. She swears by it but if you break her heart. She turn cold as a freezer. That fairy tale ending with a knight in shining armor. She can be my Sleeping Beauty. I’m gon’ put her in a coma. Woo! Damn I think I love her. Shawty so bad. I’m sprung and I don’t care. She got me like a roller coaster. Turn the bedroom into a fair. Her love is like a drug. I was tryna hit it and quit it But lil’mama so dope. I messed around and got addicted. So you wanna play with magic. Boy, you should know whatcha falling for. Baby do you dare to do this. Cause I’m coming atcha like a dark horse. Are you ready for, ready for A perfect storm, perfect storm Cause once you’re mine, once you’re mine There’s no going back.".toUpperCase();

 //   console.log("Import lyrics is finished");
}

var getNextWord = function(chSpace,fileNumber) {
    var word = "";
    if (fileNumber < numFiles) {
        if (chSpace<=lyrics[fileNumber].length) {

   //         console.log(getChar(chSpace, fileNumber));
   //         console.log(isLetter(getChar(chSpace, fileNumber)));
            while (isLetter(getChar(chSpace, fileNumber)) == false && chSpace < lyrics[fileNumber].length) {
                chSpace++;
            }
            while (isLetter(getChar(chSpace, fileNumber)) && chSpace < lyrics[fileNumber].length) {
                word += getChar(chSpace, fileNumber);
                chSpace++;
            }
        }else{
      //      console.warn("problem getNextWord");
        }
    }else{
  //      console.warn("problem getNextWord2");
    }
    return word;
};

var startSentence = function(){
    for (i=0;i<numFiles;i++){
        for (j=0;j<lyrics[i].length;j++) {
            getChar(lyrics[i]);
        }
    }
};

var predictWord = function(word){
 //   console.log('<button type="button" name="lyric1" id="lyric1_yes" onclick="return gameYes()">'+word+'</button>');
    count =0;
    total=0;
    possible=true;
//    var optionsSelected;
    var select;
  //  while (probability[count]!==0){
    //    probability[count]=0;

    while (possibilities[count] != ""){
        possibilities[count]="";
        count++;

    }

    for (i=0;i<numFiles;i++){

       for (j=0;j<lyrics[i].length-word.length;j++){
            if (isLetter(getChar(j+word.length+1,i))==false) {
               foundWord=true;
               for (k = 0; k < word.length; k++) {
                   if (getChar(j + k, i) != word.charAt(k)) {
                       foundWord = false;
                   }
                }

                if (foundWord) {
                    /*
                    total++;
                    foundWord=false;
                    count =0;

                    while (probability[count]!==0){
                    while (possibilities[count] != ""){
                        if ((getChar(j+word.length,i)==" " || getChar(j+word.length,i)==",") && possibilities[count]===getNextWord(j+word.length+1,i)){
                            console.log("a" + probability[count] + possibilities[count]+total);
                            probability[count]++;
                            foundWord=true
                        }
                        count++;
                    }
                    if (foundWord===false){
                        probability[count]=1;

                        possibilities[count]=getNextWord(j+word.length+1,i);
                    }
                    */
                  //  console.log(getNextWord(j+word.length+1,i));
                    possibilities[total]=getNextWord(j+word.length+1,i);
                  //  console.log(possibilities[total]);
                    total++;
                }
           }
    }


  }
    for(i=0;i<4;i++){
  //      console.log(possibilities[i]+i);
        options[i]=".";
    }
  /*  count=0;
      while (probability[count]!==0){
        count++;
    }
    count--;*/
    count=0;
    for(i=0;i<total;i++){
        seenPossibilities[i]="";
    }
    for(i=0;i<total;i++){
     //   console.log("^^^" + possibilities[i]);
        seen = false;
        for (j=0;j<count;j++){
          //  console.log(">>" + possibilities[i] + "   " + seenPossibilities[j]);
            if (possibilities[i]==seenPossibilities[j] && possibilities[i]!=""){
                seen = true;
     //           console.log("WOO");
            }
        }
        if (seen==false && possibilities[i]!=""){
    //        console.log("WOO2");
            seenPossibilities[count]=possibilities[i];
            count++;
        }
    }
  //  console.log("       " + count);
 //   for (b=0;b<count;b++){
 //       console.log(" . " + nextWord + "   " + seenPossibilities[b]);
  //  }
    if (count>=4) {
    //    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%" + count);
        /*for (j=0;j<4;j++) {
           select = parseInt(Math.random() * total);
            for (i = 0; i < count; i++) {
                if (select > probability[i]) {
                    select -= probability[i];
                } else {
                    if (options[j]==""){
                        if (options[0]!=possibilities[i] && options[1]!=possibilities[i] && options[2]!=possibilities[i] && options[3]!=possibilities[i]){
                            options[j]=possibilities[i];
                            total-=probability[i];
                            probability[i]=0;
                            console.log(options[j]);
                    //        console.log("more maybe");
                        }else {
                            console.log("works less maybe");
                        }
                    }else{
                        console.log(j+"maybe not works" + options[j]);
                    }

                }

            }
        }
        console.log(actualWord);
        if (options[0]!=actualWord && options[1]!=actualWord && options[2]!=actualWord && options[3]!=actualWord) {
            options[Math.random() * 4] = actualWord;
        }*/

        for(j=0;j<4;j++) {
    //        console.log(possibilities[j]+ "!!!!!" + options[i]);
            select = parseInt(Math.random() * total);
            while (options[0]==possibilities[select] || options[1]==possibilities[select] || options[2]==possibilities[select] || options[3]==possibilities[select]) {
                select = parseInt(Math.random() * total);

            }
            // DON'T WANT
              /*          if (possibilities[j]==nextWord){
                            console.log('<button type="button" name="lyric1" id="lyric1_no' + j + '" onclick="return gameYes()">' + possibilities[select] + '</button>');
                       }else {
                          console.log('<button type="button" name="lyric1" id="lyric1_no' + j + '" onclick="return gameNo()">' + possibilities[select] + '</button>');
                      }*/

            options[j]=possibilities[select];
     //       console.log(possibilities[select] + "  " + j + "  " + options[j]);
        }

        if (options[0]!=nextWord && options[1]!=nextWord && options[2]!=nextWord && options[3]!=nextWord) {
            options[parseInt(Math.random() * 4)] = nextWord;
        }
        for(j=0;j<4;j++){
    //        console.log(options[j]);
        }
    }else{
        possible=false;
  //      giveWord(charSpace,fileNum);
     //   console.log("not enough suggestions"+count);
    }

};

var isLetter = function(character){

   /* switch(character){
        case "Q"||"W"||"E"||"R"||"T"||"Y"||"U"||"I"||"O"||"P"||"A"||"S"||"D"||"F"||"G"||"H"||"J"||"K"||"L"||"Z"||"X"||"C"||"V"||"B"||"N"||"M"||"'":
            return true;
        default:
            return false;
    }*/
    return (character=="A"||character=="B"||character=="C"||character=="D"||character=="E"||character=="F"||character=="G"||character=="H"||character=="I"||character=="J"||character=="K"||character=="L"||character=="M"||character=="N"||character=="O"||character=="P"||character=="Q"||character=="R"||character=="S"||character=="T"||character=="U"||character=="V"||character=="W"||character=="X"||character=="Y"||character=="Z"||character=="'");

};

function getChar(chSpace,fileNumber){
    if (fileNumber<numFiles) {
        if (lyrics[fileNumber].length >= chSpace) {
            return lyrics[fileNumber].charAt(chSpace);
        } else {
            return".";
            console.warn("problem getChar 1");
        }
    }else{
        console.warn("problem getChar 2");
    }
}

function getNumber(){
    return parseInt(Math.random()*4);

}
function setup(){
    for (i=0;i<1000;i++){
        possibilities[i]="";
    }

    //  console.log("PlayGame is being called");
    //  console.log("the");
    importLyrics();
    giveWord(0,fileNum);
    //  console.log("ImportLyrics is over");

    for(i=0;i<4;i++){
        options[i]="";
    }
}
function playGame(){
    var doneWord=false;

    while (charSpace<lyrics[fileNum].length && doneWord==false){

        if (isLetter(getChar(charSpace-1,fileNum))==false){
            if(isLetter(getChar(charSpace,fileNum))) {
                actualWord = getNextWord(charSpace, fileNum);
                start = charSpace + actualWord.length;
                nextWord = getNextWord(start, fileNum);
                predictWord(getNextWord(charSpace, fileNum));

           //     console.log("$$" + start + nextWord);
                if(possible) {
                    for (i = 0; i < 4; i++) {
                        console.log(i + options[i]);
                        //            if (seenPossibilities[i]==nextWord){
                        //                console.log('<button type="button" name="lyric1" id="lyric1_no' + i + '" onclick="return gameYes()">' + possibilities[parseInt(Math.random*total)] + '</button>');
                        //           }else {
                        //              console.log('<button type="button" name="lyric1" id="lyric1_no' + i + '" onclick="return gameNo()">' + possibilities[parseInt(Math.random*total)] + '</button>');
                        //          }
                    }
                }
                // choice=prompt("Type a number for which word you think will come up");
                choice = getNumber();
                if (options[choice] == nextWord) {
        //            console.log(nextWord + "FF0000");
     //               giveWord(charSpace + actualWord.length, fileNum);
                    right();
                } else {
        //            console.log(nextWord + "00FF00");
       //             giveWord(charSpace + actualWord.length, fileNum);
                    wrong();
                }
                doneWord=true;
            }else{
                textSoFar+=" ";
            }
        }

    //    console.log(actualWord);
      //  console.log(getNextWord(charSpace,fileNum));
        charSpace+=1;//getNextWord(charSpace,fileNum).length;
  //      console.log(charSpace);
   //     console.log(getNextWord(charSpace,fileNum));
    }

}
function giveWord(charStart,fileNumber){
    var addText= getNextWord(charStart,fileNumber);
    if (charStart!=0) {
        //       console.log(lyrics[fileNumber]);
        //   }

        /*  while(charStart<lyrics[fileNumber].length && isLetter(getChar(charStart,fileNumber))){
         addText+=getChar(charStart,fileNumber);
         charStart+=1;
         }*/
        charStart += addText.length + 1;
        console.log(getChar(charStart, fileNumber));
        while (charStart < lyrics[fileNumber].length && isLetter(getChar(charStart, fileNumber)) == false) {
            addText += getChar(charStart, fileNumber);
            charStart += 1;
        }
        /* if (isLetter(getChar(charStart-1-addText.length,fileNumber))==false && addText.length == 1 && addText != "A" && addText != "I"){
         addText = space;
         };*/
    }else{
        charStart += addText.length + 1;
        console.log(getChar(charStart, fileNumber));
        while (charStart < lyrics[fileNumber].length && isLetter(getChar(charStart, fileNumber)) == false) {
            addText += getChar(charStart, fileNumber);
            charStart += 1;
        }
        addText+=" ";
    }
    console.log(addText);
    textSoFar+=addText;
    console.log(textSoFar);
}
/*
function buttonClick(){
    while (charSpace<lyrics[fileNum].length && doneWord==false){

        if (isLetter(getChar(charSpace-1,fileNum))==false){
            if(isLetter(getChar(charSpace,fileNum))) {
                actualWord = getNextWord(charSpace, fileNum);
                start = charSpace + actualWord.length;
                predictWord(getNextWord(charSpace, fileNum));
                nextWord = getNextWord(start, fileNum);
                console.log("$$" + start + nextWord);
                for (i = 0; i < 4; i++) {
                    console.log(options[i] + i);
                }

                // choice=prompt("Type a number for which word you think will come up");
                choice = getNumber();
                if (options[choice] == nextWord) {
                    console.log(nextWord + "FF0000");
                    giveWord(charSpace + actualWord.length, fileNum);
                    right();
                } else {
                    console.log(nextWord + "00FF00");
                    giveWord(charSpace + actualWord.length, fileNum);
                    wrong();
                }
            }else{
                textSoFar+=" ";
            }
        }

        //    console.log(actualWord);
        //  console.log(getNextWord(charSpace,fileNum));
        charSpace+=1;//getNextWord(charSpace,fileNum).length;
        //      console.log(charSpace);
        //     console.log(getNextWord(charSpace,fileNum));
    }

}*/
function right(){

}
function wrong() {

}
setup();
for (a=0;a<50;a++){
    playGame();
}



