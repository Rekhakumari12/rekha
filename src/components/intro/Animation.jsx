import React from 'react'
import Particles from 'react-particles-js'
export default function Amination() {
  return (
    <>
    <Particles 
        params={{
        "particles": {
            "number": {
                "value": 200,
                "density": {
                    "enable": false
                }
            },
            "size": {
                "value": 5,
                "random": true,
                "anim": {
                    "speed": 2,
                    "size_min": 0.3
                }
            },
            "line_linked": {
                "enable": false
            },
            "move": {
                "random": true,
                "speed": 1,
                "direction": "down",
                "out_mode": "out"
            }
        },
        "interactivity": {
            "detect_on": "window",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "bubble"
                },
                "onclick": {
                    "enable": true,
                    "mode": "repulse"
                }
            },
            "modes": {
                "bubble": {
                    "distance": 500,
                    "duration": 2,
                    "size": 0,
                    "opacity": 0
                },
                "repulse": {
                    "distance": 200,
                    "duration": 2
                }
            }
        }
	}}
    />
</>
)

}
