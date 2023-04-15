var output = ``;

var banner = `<pre> ******   ****     ****   ******                **        <br>
/*////** /**/**   **/**  **////**              /**        <br>
/*   /** /**//** ** /** **    //   ******      /**  ***** <br>
/******  /** //***  /**/**        **////**  ****** **///**<br>
/*//// **/**  //*   /**/**       /**   /** **///**/*******<br>
/*    /**/**   /    /**//**    **/**   /**/**  /**/**//// <br>
/******* /**        /** //****** //****** //******//******<br>
///////  //         //   //////   //////   //////  ////// <br>
Type 'help' to see all commands<br></pre>`;
var help = `Commands: <br>
help--------------- Shows all available commands <br>
banner------------- Shows banner <br>
whois------------ Info about me <br>
links-------------- Links about me <br>
clear-------------- Clears terminal <br>`

var aboutme = `I am a 16 year old A-level student currently studying computer science, mathematics,<br>
further mathematics, and physics. Don't have any job experience cuz im lazy gg ez no re.<br>`

var links = `<a href="https://github.com/NGPY" target="_blank">Github</a><br>`

function init(){
    output += document.getElementById("terminal-prefix").textContent + "banner" + banner;
    document.getElementById("terminal-output").innerHTML = output;
    document.getElementById("terminal-input-field").value = ``;
}

function checkEnter(event) {
    if (event.keyCode === 13) {
      // Call your function here
      command();
    }
  }
  
function command() {
// Your function code here
    var input = document.getElementById("terminal-input-field").value;
    console.log(input)
    var prefix = document.getElementById("terminal-prefix").textContent;
    run_command(input, prefix)
}

function run_command(commandinput, commandprefix){
    var args = commandinput.split(" ");
    switch(args[0]){
        case `help`:
            output += commandprefix + commandinput + `<br>` + help;
            document.getElementById("terminal-output").innerHTML = output;
            document.getElementById("terminal-input-field").value = ``;
            break;
        case `clear`:
            output = ``;
            document.getElementById("terminal-output").innerHTML = output;
            document.getElementById("terminal-input-field").value = ``;
            break;
        case `banner`:
            output += commandprefix + commandinput + `<br>` + banner;
            document.getElementById("terminal-output").innerHTML = output;
            document.getElementById("terminal-input-field").value = ``;
            break;
        case `secret`:
            if (args[1] == `mymumiscool123`){
                output += commandprefix + commandinput + `<br>` + "You found the secret, nothing here tho" + '<br>';
                document.getElementById("terminal-output").innerHTML = output;
                document.getElementById("terminal-input-field").value = ``;
                break;
            }
            else{
                output += commandprefix + commandinput + `<br>` + "Incorrect password." + '<br>';
                document.getElementById("terminal-output").innerHTML = output;
                document.getElementById("terminal-input-field").value = ``;
                break;
            }
        case `whois`:
            output += commandprefix + commandinput + `<br>` + aboutme;
            document.getElementById("terminal-output").innerHTML = output;
            document.getElementById("terminal-input-field").value = ``;
            break;
        case `links`:
            output += commandprefix + commandinput + `<br>` + links;
            document.getElementById("terminal-output").innerHTML = output;
            document.getElementById("terminal-input-field").value = ``;
            break;
        default:
            output += commandprefix + commandinput + `<br>` + `Command '` + args[0] + `' unknown` + `<br>`;
            document.getElementById("terminal-output").innerHTML = output;
            document.getElementById("terminal-input-field").value = ``;
            break;
    }
}