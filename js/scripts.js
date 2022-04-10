$(document).ready(function() {
  $(".form").submit(function(event) {
    event.preventDefault();
    let runningTotal = 0;
    runningTotal += parseInt($("#interface").val());
    runningTotal += parseInt($("#opsys").val());
    runningTotal += parseInt($("#born").val());
    runningTotal += parseInt($("#colour").val());
    runningTotal += parseInt($("#animal").val());
    $("#cpp").hide();
    $("#golang").hide();
    $("#malbolge").hide();
    if(runningTotal === 5 | runningTotal === 6 | runningTotal === 7 | runningTotal === 8 | runningTotal === 9) {
      $("#cpp").show();
    } else if(runningTotal === 10 | runningTotal === 11 | runningTotal === 12 | runningTotal === 13 | runningTotal === 14) {
      $("#golang").show();
    } else if(runningTotal === 15) {
      $("#malbolge").show();
    } else {
      alert("YOU SHOULD NOT BE SEEING THIS. If you do see this, please talk to the site admin.");
    }
  });
});