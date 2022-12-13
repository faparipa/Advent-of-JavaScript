const episodes = [
    {
        id: 1,
        name: "James Q Quick's Origin Story",
    },
    {
        id: 2,
        name: "Amy Dutton's Origin Story",
    },
    {
        id: 3,
        name: "The Tech Behind Compressed.fm",
    },
    {
        id: 4,
        name: "Starting a New Development Project",
    },
    {
        id: 5,
        name: "How Do you Start a New Design Project?",
    },
    {
        id: 6,
        name: "Freelancing (Part 1)",
    },
    {
        id: 7,
        name: "Freelancing (Part 2)",
    },
    {
        id: 8,
        name: "The Tech Behind jamesqquick.com",
    },
    {
        id: 9,
        name: "Teh Tech Behind SelfTeach.me",
    },
    {
        id: 10,
        name: "Design Fundamentals (Part 1)",
    },
    {
        id: 11,
        name: "Design Fundamentals (Part 2)",
    },
    {
        id: 12,
        name: "Productivity: Tools, Tips, and Workflows",
    },
    {
        id: 13,
        name: "The Future of Code with No Code",
    },
    {
        id: 14,
        name: "Building the Perfect Desk Setup",
    },
    {
        id: 15,
        name: "Everything You Need to Know to Get Started in SvelteKit",
    },
    {
        id: 16,
        name: "Live Streaming for Beginners",
    },
    {
        id: 17,
        name: "All Things Automated",
    },
    {
        id: 18,
        name: "Amy Gives James a Design Consult",
    },
    {
        id: 19,
        name: "Figma for Everyone",
    },
    {
        id: 20,
        name: "Learning and Building in Public",
    },
    {
        id: 21,
        name: "Getting Your First Dev Job",
    },
    {
        id: 22,
        name: "Hiring a Designer or Getting Your First UI / UX Job",
    },
    {
        id: 23,
        name: "IRL Freelance Proposal",
    },
    {
        id: 24,
        name: "Getting Started on YouTube",
    },
    {
        id: 25,
        name: "Starting your own Podcast",
    },
    {
        id: 26,
        name: "How Blogging Can Change Your Career",
    },
    {
        id: 27,
        name: "Talking to Some of Our Favorite Content Creators",
    },
    {
        id: 28,
        name: "Our Favorite Things: A Crossover Episode with Web Dev Weekly",
    },
    {
        id: 29,
        name: "Freelancing IRL: Unveiling a Site Redesign",
    },
    {
        id: 30,
        name: "Wordpress in 2021",
    },
    {
        id: 31,
        name: "Struggle Bus",
    },
    {
        id: 32,
        name: "Getting Started with TypeScript",
    },
    {
        id: 33,
        name: "Small Design Tweaks that Make All the Difference",
    },
    {
        id: 34,
        name: "Getting git",
    },
    {
        id: 35,
        name: "Crossover Episode with Purrfect Dev",
    },
    {
        id: 36,
        name: "SVGs FTW",
    },
    {
        id: 37,
        name: "Building a Course",
    },
];

let episodesListUl = document.querySelector(".episodes");
let content = document.querySelector(".content");
let selectAllBtn = document.getElementById("selectAll");

let enableGroupSelection = () => {
    let lastChecked = null;
    const checkboxes = Array.from(
        document.querySelectorAll('input[type="checkbox"]')
    );

    checkboxes.forEach((checkbox) =>
        checkbox.addEventListener("click", (event) => {
            if (!lastChecked) {
                lastChecked = checkbox;
                return;
            }

            if (event.shiftKey) {
                const start = checkboxes.indexOf(checkbox);
                const end = checkboxes.indexOf(lastChecked);
                checkboxes
                    .slice(Math.min(start, end), Math.max(start, end) + 1)
                    .forEach(
                        (checkbox) => (checkbox.checked = lastChecked.checked)
                    );
            }

            lastChecked = checkbox;
        })
    );
};

episodes.forEach((episode) => {
    let chekLine = "";

    chekLine += `<li>
      <label for="episode-${episode.id}">
          <input
              type="checkbox"
              name="episode-${episode.id}"
              id="episode-${episode.id}"
          />
          <span>${episode.id} || ${episode.name}</span>
      </label>`;

    episodesListUl.innerHTML += chekLine;

    enableGroupSelection();
});
isChecked = false;
selectAllBtn.addEventListener("click", () => {
    const checkboxes = document.querySelectorAll("input[type=checkbox]");

    if (!isChecked) {
        checkboxes.forEach((cb) => {
            cb.checked = true;
        });
        selectAllBtn.textContent = "Unselect All";
        return (isChecked = true);
    } else {
        checkboxes.forEach((cb) => {
            cb.checked = false;
        });
        selectAllBtn.textContent = "Select All";
        return (isChecked = false);
    }
    /*function toggle(source) {
    checkboxes = document.getElementsByName('foo');
    for(var i=0, n=checkboxes.length;i<n;i++) {
      checkboxes[i].checked = source.checked;
    }
  }*/
});
//checkAllEpisod();
/*
function geek() {
    var myDiv = document.querySelector(".content");

    // creating checkbox element
    var checkbox = document.createElement("input");

    // Assigning the attributes
    // to created checkbox
    checkbox.type = "checkbox";
    checkbox.name = "name";
    checkbox.value = "value";
    checkbox.id = "id";

    // creating label for checkbox
    var label = document.createElement("label");

    // assigning attributes for
    // the created label tag
    label.htmlFor = "id";

    // appending the created text to
    // the created label tag
    label.appendChild(
        document.createTextNode("This is the label for checkbox.")
    );

    // appending the checkbox
    // and label to div
    myDiv.appendChild(checkbox);
    myDiv.appendChild(label);
}
geek();*/
