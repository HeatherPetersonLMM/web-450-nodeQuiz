        var question1 = ["<b>Question 1.  What does REST stand for?  </b>"];
        var choices1 = ["<input onclick=incorrect1() name =button1 type=radio /> Representational System Transfer.<br /><input onclick=correct1() name=button1 type=radio /> Representational State Transfer. <br /><input onclick=incorrect1() name=button1 type=radio /> Resource State Transfer.<br /><input onclick=incorrect1() name=button1 type=radio /> Resource System Transer. "]
      
        var question2 = ["<b>Question 2.  REST relies on a statelessness, client-server protocol, which is almost always ______? </b>"];
        var choices2 = ["<input onclick=incorrect2() name =button2 type=radio /> JSON <br /><input onclick=incorrect2() name=button2 type=radio /> XML <br /><input onclick=incorrect2() name=button2 type=radio /> SOAP <br /><input onclick=correct2() name=button2 type=radio /> HTTP "]

        var question3 = ["<b>Question 3.	What does API stand for? </b>"];
        var choices3 = ["<input onclick=correct1() name =button3 type=radio />  Application Program Interface. <br /><input onclick=incorrect1() name=button3 type=radio /> Application Program Identifier.<br /><input onclick=incorrect1() name=button3 type=radio /> Application Protocol Indexing. <br /><input onclick=incorrect1() name=button3 type=radio /> Analaysis Program Interface. "]

        var question4 = ["<b>Question 4.	The Web is based off what three technologies? </b>"];
        var choices4 = ["<input onclick=incorrect1() name =button4 type=radio /> HTML, CSS, HTTP <br /><input onclick=correct1() name=button4 type=radio /> URL, HTTP, HTML <br /><input onclick=incorrect1() name=button4 type=radio /> GET, POST, PUT <br /><input onclick=incorrect1() name=button4 type=radio /> URI, URL, CSS "]
      
        var question5 = ["<b>Question 5.  The goal of ________ is to improve server scalability by eliminating any need for the server to maintain an awareness of the client state beyond the current request. </b>"];
        var choices5 = ["<input onclick=correct1() name =button5 type=radio /> Statelessness <br /><input onclick=incorrect1() name=button5 type=radio /> a state transition <br /><input onclick=incorrect1() name=button5 type=radio /> transclusion <br /><input onclick=incorrect1() name=button5 type=radio /> table scanning "]

        var question6 = ["<b>Question 6.	Which HTTP verb (command) updates a specified resource ?</b>"];
        var choices6 = ["<input onclick=incorrect1() name =button6 type=radio /> HEAD <br /><input onclick=incorrect1() name=button6 type=radio /> GET <br /><input onclick=correct1() name=button6 type=radio /> PUT <br /><input onclick=incorrect1() name=button6 type=radio /> POST "]

        var question7 = ["<b>Question 7.	Which of the following are considered an <i>advantage</i> of RESTful APIs?  </b>"];
        var choices7 = ["<input onclick=incorrect1() name =button7 type=radio /> Flexibility. <br /><input onclick=incorrect1() name=button7 type=radio /> Statelessness. <br /><input onclick=incorrect1() name=button7 type=radio /> High-performance. <br /><input onclick=correct1() name=button7 type=radio /> All of the above. "]

        var question8 = ["<b>Question 8.	Which of the following are considered a <i>disadvantage</i> of RESTful APIs?  </b>"];
        var choices8 = ["<input onclick=incorrect1() name =button8 type=radio /> Challenges with passing test runs. <br /><input onclick=incorrect1() name=button8 type=radio /> Costly programming procedures. <br /><input onclick=incorrect1() name=button8 type=radio /> Complex functionality structures. <br /><input onclick=correct1() name=button8 type=radio /> All of the above. "]

        var question9 = ["<b>Question 9.	Every URI is a URL?  </b>"];
        var choices9 = ["<input onclick=incorrect1() name =button9 type=radio /> True <br /><input onclick=correct1() name=button9 type=radio /> False <br />"]

        var question10 = ["<b>Question 10.	If the URL is valid, the ____ request will output the content of the website. </b>"];
        var choices10 = ["<input onclick=correct1() name =button10 type=radio /> GET <br /><input onclick=incorrect1() name=button10 type=radio /> POST <br /><input onclick=incorrect1() name=button10 type=radio /> PUT <br /><input onclick=incorrect1() name=button10 type=radio /> HEAD"]

      var a;
      var b;
      var c;
      var d;
      var e;
      var f;
      var g;
      var h;
      var i;
      var j;

        window.onload = function () {
          messages1.innerHTML = question1;
          options1.innerHTML = choices1;
          click1.innerHTML = "<button onclick=set2()>Submit</button>";
        }

        function correct1() {
          a = 1;
        }

        function incorrect1() {
          a = 0;
        }

        function set2() {
          messages1.innerHTML = question2;
          options1.innerHTML = choices2;
          click1.innerHTML = "<button onclick=set3()>Submit</button>";
        }

        function correct1() {
          b = 1;
        }

        function incorrect1() {
          b = 0;
        }

        function set3() {
          messages1.innerHTML = question3;
          options1.innerHTML = choices3;
          click1.innerHTML = "<button onclick=set4()>Submit</button>";
        }

        function correct1() {
          c = 1;
        }

        function incorrect1() {
          c = 0;
        }

        function set4() {
          messages1.innerHTML = question4;
          options1.innerHTML = choices4;
          click1.innerHTML = "<button onclick=set5()>Submit</button>";
        }

        function correct1() {
          d = 1;
        }

        function incorrect1() {
          d = 0;
        }

        function set5() {
          messages1.innerHTML = question5;
          options1.innerHTML = choices5;
          click1.innerHTML = "<button onclick=set6()>Submit</button>";
        }

        function correct1() {
          e = 1;
        }

        function incorrect1() {
          e = 0;
        }

        function set6() {
          messages1.innerHTML = question6;
          options1.innerHTML = choices6;
          click1.innerHTML = "<button onclick=set7()>Submit</button>";
        }

        function correct1() {
          f = 1;
        }

        function incorrect1() {
          f = 0;
        }
        
        function set7() {
          messages1.innerHTML = question7;
          options1.innerHTML = choices7;
          click1.innerHTML = "<button onclick=set8()>Submit</button>";
        }

        function correct1() {
          g = 1;
        }

        function incorrect1() {
          g = 0;
        }

        function set8() {
          messages1.innerHTML = question8;
          options1.innerHTML = choices8;
          click1.innerHTML = "<button onclick=set9()>Submit</button>";
        }

        function correct1() {
          h = 1;
        }

        function incorrect1() {
          h = 0;
        }

        function set9() {
          messages1.innerHTML = question9;
          options1.innerHTML = choices9;
          click1.innerHTML = "<button onclick=set10()>Submit</button>";
        }

        function correct1() {
          i = 1;
        }

        function incorrect1() {
          i = 0;
        }

        function set10() {
          messages1.innerHTML = question10;
          options1.innerHTML = choices10;
          click1.innerHTML = "<button onclick=results1()>Submit</button>";
        }

        function correct1() {
          j = 1;
        }

        function incorrect1() {
          j = 0;
        }