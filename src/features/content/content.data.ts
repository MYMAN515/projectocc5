import type { ContentTree } from "./content.types";

export const content: ContentTree = {
  submodule1: {
    id: 1,
    slug: "physical-emotional-changes",
    title: "Physical and Emotional Changes",
    topics: [
      {
        id: 1,
        slug: "animation-body-changes",
        title: "Animation of Body Changes",
        image:
          "https://static.vecteezy.com/system/resources/thumbnails/004/899/853/small/boy-measures-his-height-with-ruler-height-meter-for-children-vector.jpg",
        teach: [
          {
            type: "genderSelect",
            text: "Choose me!",
            choices: [{ gender: "male", image: "images/boy.png", label: "Boy" }]
          },
          {
            text: "Body changes",
            image: {
              en: "images/kk2.jpg",
              ms: "images/kk3.jpg",
              zh: "images/kk1.jpg"
            }
          },
          {
            text: "Grow taller",
            image: {
              male: "images/HeightGrowthCartoonMale.jpg"
            }
          },
          {
            text: "Body hair",
            image: {
              male: "images/bodyHairMale.jpeg"
            }
          },
          {
            image: {
              en: "images/aae.jpg",
              ms: "images/aam.jpg",
              zh: "images/aaz.jpg"
            }
          }
        ],
        activity: {
          instruction: "Click me to see changes!",
          type: "clickToReveal",
          items: [
            {
              before: "images/HeightGrowthCartoonMale.jpg",
              after: "images/Timelapse Growth Age 14 to Age 16 Short.gif",
              label: "Growing Taller"
            },
            {
              before: "images/puberty-chestMale.jpg",
              after: "images/armpitHair.gif",
              label: "Growing Body Hair"
            }
          ]
        },
        quiz: {
          question: "Which picture shows a body change during puberty?",
          options: [
            {
              text: "Growing Taller",
              correct: true,
              image:
                "https://images.onlymyhealth.com/imported/images/2021/September/22_Sep_2021/big2_GrowHeightNaturally.jpg"
            },
            {
              text: "Sleeping",
              correct: false,
              image:
                "https://www.uclahealth.org/sites/default/files/styles/landscape_3x2_016000_640x427/public/images/21/sleep.jpg?h=b1a91ebe&f=08df32d3&itok=eQVIw07T"
            }
          ]
        }
      },
      {
        id: 2,
        slug: "mood-tracker",
        title: "Mood Tracker",
        image:
          "https://www.metropolisindia.com/upgrade/blog/upload/25/06/mood-disorder-definition-symptoms1751274829.webp",
        teach: [
          {
            image: "images/IMG-20260108-WA0013.jpg",
            text: "It's okay to have any feeling"
          }
        ],
        activity: {
          instruction: "Tap your mood now!",
          type: "multiSelect",
          items: [
            { text: "I feel happy", image: "images/Screenshot_20260108_233847_Gallery.jpg" },
            { text: "I feel angry", image: "images/Screenshot_20260108_233740_Gallery.jpg" },
            { text: "I feel sad", image: "images/Screenshot_20260108_233823_Gallery.jpg" }
          ]
        },
        quiz: [
          {
            type: "subjective",
            question: "Touch your forehead. How does your skin feel to your fingers?",
            image: "images/kais.jpg",
            options: [
              { text: "Smooth and Dry!", image: "images/male1.jpg" },
              { text: "Silky or Oily", image: "images/male2.jpg" },
              { text: "Bumpy and Itchy", image: "images/male3.jpg" }
            ]
          },
          {
            type: "subjective",
            question: "How much power do you have now?",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaUXoeVwvxP41cJ-uWPp4AmUjTVAUEi87tyQ&s",
            options: [
              { text: "100%", image: "https://www.mentalup.co/img/blog/running-games-for-kids-12.jpg" },
              {
                text: "50%",
                image:
                  "https://www.shutterstock.com/image-photo/fitness-tired-man-sweat-outdoor-600nw-2478773559.jpg"
              },
              {
                text: "0%",
                image:
                  "https://assets.technologynetworks.com/production/dynamic/images/content/382194/sleep-disorder-is-more-common-than-we-thought-382194-960x540.jpg?cb=12604922"
              }
            ]
          }
        ]
      },
      {
        id: 4,
        slug: "timeline-matching",
        title: "Timeline Matching Activity",
        image:
          "https://www.teachhub.com/wp-content/uploads/2020/10/Project-Based-Timeline-Lesson_CLP-1152x890.jpg",
        teach: [
          {
            text: "Changes happen over time, especially during puberty",
            image: "images/Screenshot 2026-01-10 061848.png"
          },
          {
            text: "Before puberty: You are still a child",
            image:
              "https://www.datocms-assets.com/55312/1635467982-hero-images.jpg?ar64=NDoz&crop=focalpoint&fit=crop&fm=jpg&fp-x=0.53&fp-y=0.18&w=1440"
          },
          {
            text: "You are not tall",
            image:
              "https://www.shutterstock.com/image-photo/cute-little-children-measuring-height-600nw-2410381875.jpg"
          },
          {
            text: "You have no beard",
            image:
              "https://images.generated.photos/MNhz30jdBTN4cqOMSYq4yLe9kXlx2DvsYhzKrhxKF-Q/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjU3ODEwLmpwZw.jpg"
          },
          {
            text: "During puberty: You start growing taller",
            image: "images/HeightGrowthCartoonMale.jpg"
          },
          {
            text: "Then: Body hair appears",
            image: "images/armpitHair.gif"
          },
          {
            text: "So: You start to shave",
            image:
              "https://img.freepik.com/free-photo/front-view-hairy-man-shaving-beard_23-2149615818.jpg?semt=ais_hybrid&w=740&q=80"
          }
        ],
        activity: {
          instruction: "When does body hair appear?",
          type: "timeline",
          change: "Body Hair",
          changeImage: "images/armpitHair.gif",
          timeline: [
            { stage: "Before Puberty", icon: "👶", correct: false },
            { stage: "After Puberty", icon: "🧒", correct: true }
          ]
        },
        quiz: {
          question: "When does a person have short legs?",
          image: "https://www.toyourhealth.com/content/images/growing_up2_lg__1_2_4540.jpg",
          options: [
            { text: "Before Puberty", correct: true, icon: "👶" },
            { text: "After Puberty", correct: false, icon: "🧒" }
          ]
        }
      }
    ]
  },
  submodule2: {
    id: 2,
    slug: "hygiene-self-care",
    title: "Hygiene and Self-Care Routines",
    topics: [
      {
        id: 1,
        slug: "daily-routine-builders",
        title: "Daily Routine Builders",
        image:
          "https://png.pngtree.com/png-vector/20250903/ourlarge/pngtree-boy-brushing-teeth-cartoon-illustration-png-image_17355535.webp",
        teach: [
          {
            type: "video",
            text: "Let's watch a video about daily routines!",
            videoUrl: "videos/bersih.mp4"
          },
          {
            text: "My Morning Hygiene Steps",
            type: "strip",
            steps: [
              {
                image:
                  "https://img.freepik.com/premium-photo/asian-man-waking-up-morning-sitting-bed-stretching_126277-1356.jpg",
                label: "Wake Up",
                modalImages: {
                  en: "images/we.jpg",
                  ms: "images/wm.jpg",
                  zh: "images/wc.jpg"
                }
              },
              {
                image:
                  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDg1djlmZ2Zna213dGd6amEwNHJjdHNoNWZlcTJ4bTF1Y203c3cxOCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/YaY0FF0eUWLtVNK1Uw/giphy.gif",
                label: "Brush Teeth",
                modalImages: {
                  en: "images/be.jpg",
                  ms: "images/bm.jpg",
                  zh: "images/bc.jpg"
                }
              },
              {
                image:
                  "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGJqbDBocDk2NWs1eGNueGNrcW13M2cxYXE5M3MzcThkcmc4bWY2OCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Ri8FpKsdTwiaUFWysZ/giphy.gif",
                label: "Wash Face",
                modalImages: {
                  en: "images/eimg.jpg",
                  ms: "images/mimg.jpg",
                  zh: "images/cimg.jpg"
                }
              },
              {
                image:
                  "https://www.telegraph.co.uk/content/dam/men/2017/06/30/TELEMMGLPICT000133447980_trans_NvBQzQNjv4BqdNLuJDSj-bduoIdVkVeVwdhwat7RjkF5CleLcJsFAQc.jpeg?imwidth=640",
                label: "Wear Deodorant",
                modalImages: {
                  en: "images/de.jpg",
                  ms: "images/dm.jpg",
                  zh: "images/dc.jpg"
                }
              },
              {
                image:
                  "https://globalsymbols.com/uploads/production/image/imagefile/8124/15_8124_b6261b9d-abb4-4bdb-b334-69d8ab3a8ff1.jpg",
                label: "Change Clean Clothes",
                modalImages: {
                  en: "images/cce.jpg",
                  ms: "images/ccm.jpg",
                  zh: "images/ccc.jpg"
                }
              }
            ]
          }
        ],
        activity: {
          instruction: "Look! One step is missing.",
          type: "sequence",
          steps: [
            { image: "images/woman-waking-up_53876-40961.png", visible: true },
            {
              image: "https://media.giphy.com/media/YaY0FF0eUWLtVNK1Uw/giphy.gif",
              visible: true
            },
            { image: "", visible: false, placeholder: "❓" },
            {
              image:
                "https://www.telegraph.co.uk/content/dam/men/2017/06/30/TELEMMGLPICT000133447980_trans_NvBQzQNjv4BqdNLuJDSj-bduoIdVkVeVwdhwat7RjkF5CleLcJsFAQc.jpeg?imwidth=640",
              visible: true
            },
            {
              image:
                "https://globalsymbols.com/uploads/production/image/imagefile/8124/15_8124_b6261b9d-abb4-4bdb-b334-69d8ab3a8ff1.jpg",
              visible: true
            }
          ],
          choices: [
            {
              text: "Wash Face",
              image: "https://media1.giphy.com/media/Ri8FpKsdTwiaUFWysZ/giphy.gif",
              correct: true
            },
            {
              text: "Play Toys",
              image:
                "https://todaysparent.mblycdn.com/tp/resized/2017/11/1600x1200/how-many-toys-do-kids-really-need-1280x960.jpg",
              correct: false
            }
          ]
        },
        quiz: {
          question: "Look! One step is missing.",
          options: [
            { text: "Wash Face", correct: true },
            { text: "Play Toys", correct: false }
          ]
        }
      },
      {
        id: 2,
        slug: "hygiene-kits",
        title: "Drag-and-drop hygiene kits",
        image: "https://www.cdc.gov/respiratory-viruses/media/images/4.png",
        teach: [
          {
            text: "When we shower, we need specific tools!",
            image:
              "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnplbWY0ZGhvdDk3NXVyYm9qY3VtZ3hoemdvaWJyNGhzcWI3bXNuOCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/2RrPGppiJbf8jI00DK/giphy.gif"
          }
        ],
        activity: {
          type: "showerKitMatch",
          instruction: "Which is the essential kit in taking shower?",
          leftImage:
            "https://as1.ftcdn.net/jpg/02/39/96/88/1000_F_239968859_0UhhxS7ddWIObwCXZDQ1CQguvTiUa9UR.jpg",
          choices: [
            {
              text: "Soap",
              image: "https://img.freepik.com/free-psd/flat-design-sustainability-soap-illustration_23-2151982972.jpg",
              correct: true
            },
            {
              text: "Toys",
              image: "https://www.chemicalsafetyfacts.org/wp-content/uploads/shutterstock_383521510-002-scaled.jpg",
              correct: false
            }
          ]
        },
        quiz: {
          question: "Which is the essential kit in taking shower?",
          options: [
            { text: "Soap", correct: true },
            { text: "Toys", correct: false }
          ]
        }
      }
    ]
  },
  submodule3: {
    id: 3,
    slug: "confidence-self-acceptance",
    title: "Confidence, Self-Acceptance and Lifestyle",
    topics: [
      {
        id: 1,
        slug: "positive-body-image",
        title: "Positive Body Image",
        image:
          "https://img.freepik.com/free-vector/hand-drawn-strong-man-cartoon-illustration_52683-117786.jpg?semt=ais_hybrid&w=740&q=80",
        teach: [
          { text: "My body is amazing!", image: "images/IMG-20260108-WA0004.jpg" },
          { text: "Everyone looks different", image: "images/IMG-20260108-WA0001.jpg" },
          {
            text: "I am strong and special!",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmnjOp-2J_hbXFAS4n_3a0Rt4oY6DoZzBWMw&s"
          },
          {
            text: "I love myself!",
            image:
              "https://thumbs.dreamstime.com/b/vector-illustration-cartoon-little-boy-hugging-himself-blue-heart-background-love-yourself-concept-cartoon-little-boy-221548983.jpg"
          }
        ],
        activity: {
          instruction: "I am... +",
          type: "positiveTraits",
          traits: [
            { text: "Strong", icon: "💪", image: "images/IMG-20260108-WA0005.jpg" },
            {
              text: "Special",
              icon: "⭐",
              image: "https://www.shutterstock.com/image-vector/little-kid-standing-front-mirror-600nw-2371892163.jpg"
            },
            {
              text: "Amazing",
              icon: "✨",
              image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmnjOp-2J_hbXFAS4n_3a0Rt4oY6DoZzBWMw&s"
            }
          ]
        },
        quiz: {
          question: "Which shows positive body image? +",
          options: [
            { text: "My body is strong", icon: "💪", correct: true },
            { text: "My body is bad", icon: "❌", correct: false }
          ]
        }
      },
      {
        id: 2,
        slug: "what-i-like",
        title: "What I Like About Me",
        image:
          "https://media.istockphoto.com/id/1452314042/vector/happy-boy-hugging-himself-with-heart-icons-self-care-self-love.jpg?s=612x612&w=0&k=20&c=lqroMX9fXCWxJ5qZfpnJdUSsf8fv3Bhhwt9I_57IPuU=",
        teach: [
          {
            text: "Look in the mirror",
            image: "https://img.freepik.com/premium-vector/cartoon-boy-looking-his-reflection-mirror_1120557-36298.jpg"
          }
        ],
        activity: {
          instruction: "What makes you smile? +",
          type: "multiSelect",
          items: [
            {
              text: "My Cool Hair",
              image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoASVH4k04RzFcJ_82hz389VZTtGhl9wksBw&s"
            },
            { text: "My Strong Legs", image: "https://ik.imagekit.io/shortpedia/Voices/wp-content/uploads/2020/10/Calf-Raises.jpg" },
            {
              text: "My Happy Eyes",
              image: "https://previews.123rf.com/images/denisnata/denisnata1803/denisnata180300001/96973751-close-up-front-portrait-of-beautiful-happy-woman-face-with-gray-eyes.jpg"
            }
          ]
        },
        quiz: {
          question: "Today, I... +",
          options: [
            {
              text: "Helped others",
              image:
                "https://www.entrepreneur.com/wp-content/uploads/sites/2/2016/08/20160813000120-GettyImages-486493061.jpeg",
              correct: true
            },
            {
              text: "Finished my homework",
              image: "https://img.freepik.com/premium-photo/happy-boy-finished-homework_128867-24.jpg",
              correct: true
            },
            {
              text: "Cleaned my room",
              image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
              correct: true
            }
          ]
        }
      },
      {
        id: 4,
        slug: "sleep-impact",
        title: "Sleep Impact Quiz",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7CqDTqTLZTb5D4L0m6yqnI-k5hkWP5WCSJA&s",
        teach: [
          { text: "Sleep helps you grow!", image: "images/9be86e95b8871a4e5f1609045f9dcd62.jpg" },
          { text: "Sleep makes you strong", image: "images/c1e10dec70d2ac1abc48cc0f70b5d25a.jpg" },
          { text: "When tired, you need rest", image: "images/Screenshot_20260108_233946_Gallery.jpg" },
          { text: "Sleep gives you energy!", icon: "🔋" }
        ],
        activity: {
          instruction: "Which child is well-rested?",
          type: "compare",
          items: [
            {
              text: "Sleeping Child",
              image: "images/9be86e95b8871a4e5f1609045f9dcd62.jpg",
              correct: true
            },
            {
              text: "Tired Child",
              image: "images/Screenshot_20260108_233946_Gallery.jpg",
              correct: false
            }
          ]
        },
        quiz: {
          question: "What does sleep give you?",
          options: [
            { text: "Energy", icon: "🔋", correct: true },
            { text: "Video Games", icon: "🎮", correct: false }
          ]
        }
      },
      {
        id: 5,
        slug: "nutrition-impact",
        title: "Nutrition Impact Quiz",
        image:
          "https://static.vecteezy.com/system/resources/thumbnails/006/521/813/small/collection-of-cute-fresh-fruits-vegetarian-food-proper-nutrition-melone-grape-apple-blueberry-appricote-lemon-orange-healthy-lifestyle-illustration-for-print-web-trendy-summer-fruits-vector.jpg",
        teach: [
          { text: "Food gives you energy!", image: "images/1dfe618f9e292ea130ef1fe95067d67b.jpg" },
          { text: "Eat fruits and vegetables", image: "images/beacab0300882784e1d97eb56393125f.jpg" },
          { text: "Healthy food makes you strong", image: "images/3e8d166c0b097476fe2960fee4c8269c.jpg" },
          { text: "Junk food is okay sometimes, not always", image: "images/f88f9062a3edc3cf74bcd2184269aa0d.jpg" }
        ],
        activity: {
          instruction: "Tap the HEALTHY foods!",
          type: "selectMultiple",
          items: [
            {
              text: "Vegetables",
              correct: true,
              image: "https://cdn-icons-png.flaticon.com/512/2329/2329865.png"
            },
            {
              text: "Fruits",
              correct: true,
              image: "https://cdn-icons-png.flaticon.com/512/415/415733.png"
            },
            {
              text: "Candy",
              correct: false,
              image: "images/candies_16671618.png"
            }
          ]
        },
        quiz: {
          question: "Which foods help you grow strong?",
          options: [
            {
              text: "Vegetables",
              correct: true,
              image: "https://cdn-icons-png.flaticon.com/512/2329/2329865.png"
            },
            {
              text: "Only Candy",
              correct: false,
              image: "images/candies_16671618.png"
            }
          ]
        }
      }
    ]
  }
};
