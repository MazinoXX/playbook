const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]
   explorers.forEach(element => console.log(element.name))
   explorers.forEach(element => console.log(element.stack))
   const new_stack = explorers.map(function(explorers){return explorers.stack})
   console.log(new_stack)
   const explorer_js = explorers.filter((tecno) => tecno.stack.includes('js'))
   const js_explorer = explorer_js.map(function(explorer){return explorer.name})
   console.log(js_explorer)
   const CDMX = explorers.find((user) => user.city == "CDMX")
   console.log(CDMX.name)
   const suma_exer = explorers.reduce((acc,current) => acc + current.exercises_completed, 0)
   console.log(suma_exer)
   const FN_task = explorers.some((b) => b.missions.frontend.exercisesFinished === true)
   console.log(FN_task)
   const OB_finished = explorers.every((mission) => mission.missions.onboarding.isFinished === 'true')
   console.log(OB_finished)



   

