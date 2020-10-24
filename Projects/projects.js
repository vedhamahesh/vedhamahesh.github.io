$(async () => {
  const projects = await $.getJSON("./projects.json").promise();
  $("#projects").append(
    Handlebars.compile(`
      {{#each projects}}
      <a class="project" href={{link}} target="_blank">
        <img src={{imageURL}}
          alt={{title}}>
        <div class="title">{{title}}</div>
        <div class="desc">{{description}}</div>
      </a>
      {{/each}}
    `)(projects));
});