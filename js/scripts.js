$(document).ready(function() {
  $(".form").submit(function(event) {
    event.preventDefault();
    let runningTotal = 0;
    runningTotal += parseInt($("#interface").val());
    runningTotal += parseInt($("#opsys").val());
    runningTotal += parseInt($("#born").val());
    runningTotal += parseInt($("#colour").val());
    runningTotal += parseInt($("#animal").val());
    console.log(runningTotal);
  });
});