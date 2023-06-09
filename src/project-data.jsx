import wetlands from "./assets/wetlands.jpg";
import marine from "./assets/marine.jpg";
import forest from "./assets/forest.jpg";
import featherfriend from "./assets/featherfriend.jpg";
import waddlefeet from "./assets/waddlefeet.jpg";
import pond from "./assets/pond.jpg";
import story from "./assets/story.jpg";
import code from "./assets/code.jpg";
import study from "./assets/study.jpg";
import seal from "./assets/seal.jpg";
import dolphins from "./assets/dolphins.jpg";

export default function project_data() {
  const data = [
    {
      category: "nature",
      image: wetlands,
      hashtags: "#WetlandConservation",
      header: "World Wide Wetlands",
      about: "Muckba led a team to protect wetlands by lobbying policy-makers.",
    },
    {
      category: "nature",
      image: marine,
      hashtags: "#MarineConservation",
      header: "Save Our Seas",
      about:
        "Muckba organized a community effort to remove pollutants from oceans.",
    },
    {
      category: "nature",
      image: waddlefeet,
      hashtags: "#ClimateAction #SustainableLiving",
      header: "Waddle for Change",
      about:
        "A charity event that involved a flock waddling for miles to raise awareness about climate change.",
    },
    {
      category: "nature",
      image: forest,
      hashtags: "#ForestRestoration #Biodiversity",
      header: "Forests for Future",
      about:
        "Muckba spearheaded a project to restore degraded forest ecosystems by planting native trees.",
    },
    {
      category: "nature",
      image: featherfriend,
      hashtags: "#UrbanWildlife #Coexistence",
      header: "Feathered Friends",
      about:
        "An initiative to promote co-existence between ducks and humans in urban areas.",
    },
    {
      category: "education",
      image: pond,
      hashtags: "#STEMEducation #Science",
      header: "PondHub",
      about:
        "Created an AI based module to teach humans about pond ecosystems and aquatic life.",
    },
    {
      category: "education",
      image: story,
      hashtags: "#Literacy #EarlyEducation",
      header: "Duck Tales Story Hour",
      about:
        "Conducted weekly story hour sessions for children, promoting literacy and sparking imagination.",
    },
    {
      category: "research",
      image: code,
      hashtags: "#DecodingDucks #Communication",
      header: "Quacking the Code",
      about:
        "Developing a method to decipher the communication patterns of ducks in the wild.",
    },
    {
      category: "research",
      image: seal,
      hashtags: "#MarineMystery #SealAdventures",
      header: "Secret Life of Seals",
      about:
        "Documenting the daily lives of seals and their interactions with other marine animals.",
    },
    {
      category: "research",
      image: study,
      hashtags: "#PublicHealth #DataCollection",
      header: "Avian Influenza Study",
      about:
        "Conducted a study on avian influenza, collected data and developed prevention strategies.",
    },
    {
      category: "research",
      image: dolphins,
      hashtags: "#CognitiveConundrum",
      header: "Dolphin Dialogues ",
      about:
        "Investigating the cognitive abilities of dolphins and their communication with other species.",
    },
  ];

  return data;
}
