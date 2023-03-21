const Projects = ({ project }) => {
  return `
    ${project.map(
      (project) => `
       <div class="box-in-box-project col-sm-4 mb-2">
                  <div class="img">
                    <img src="${project.link}" alt="">
                  </div>
                  <div class="information-project">
                      <div class="name-project">
                        <h3>${project.name}</h3>
                      </div>
                      <div class="content-project">
                        <p>${project.title}</p>
                      </div>
                      <div class="button-github">
                          <a href="/project/${project.id}">
                          <button class="button-86">View Project</button></a>
                      </div>
                  </div>
              </div>
    `
    )}
  `;
};

export default Projects;
