
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction1()};

function myFunction1() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
</script>
  <script>


  var myVar;

  function myFunction() {
      myVar = setTimeout(showPage, 2000);
  }

  function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
  }
