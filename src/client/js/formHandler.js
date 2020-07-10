function handleSubmit(event) {
    event.preventDefault();
    const text = document.querySelector('[data-element=test-statement]').value;
    if (!text) return;
    console.log(text);
    fetch("/api", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ text })
    })
      .then(res => res.json())
      .then(data => {
        document.querySelector('[data-element=text_polarity]').innerHTML = data.polarity;
        document.querySelector('[data-element=text_subjectivity]').innerHTML =
          data.subjectivity;
        document.querySelector('[data-element=text_polarity_confidence]').innerHTML =
          data.polarity_confidence;
        document.querySelector('[data-element=text_subjectivity_confidence]').innerHTML =
          data.subjectivity_confidence;
      });
  }

  export { handleSubmit };
