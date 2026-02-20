async function swap() {

  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const amount = document.getElementById("amount").value;

  const res = await fetch(`/swap?from=${from}&to=${to}&amount=${amount}`);

  const data = await res.json();

  document.getElementById("result").innerText = data.result;

}
