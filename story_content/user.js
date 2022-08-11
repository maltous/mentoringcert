function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5asQCfH3pMR":
        Script1();
        break;
      case "6eiECC7PxfP":
        Script2();
        break;
      case "6pqQa5RIutd":
        Script3();
        break;
      case "5t8wjAJDr4s":
        Script4();
        break;
      case "5mfy63iAvh5":
        Script5();
        break;
      case "5pLJNDOo7Zd":
        Script6();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  $("#tab-customlink").hide();
}

function Script3()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script4()
{
  $("#tab-customlink").show();
}

function Script5()
{
  $("#tab-customlink").show();
}

function Script6()
{
  window.print();
}

