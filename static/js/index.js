function generateBarChart() {
  const ctx = document.getElementById('taskBarChart').getContext('2d');

  const rawData = {
    'DP (B+A)': [5, 5, 9, 5, 7, 7],
    'DP (WBC)': [9, 9, 11, 8, 3, 5],
    'HoMeR (B+A)': [10, 10, 12, 10, 10, 8],
    'HoMeR': [18, 13, 17, 16, 15, 16]
  };

  const data = {
    labels: ['Cube', 'Dishwasher', 'Cabinet', 'Pillow', 'TV Remote', 'Sweep Trash'],
    datasets: [
      {
        label: 'DP (B+A)',
        data: rawData['DP (B+A)'].map(x => (x / 20) * 100),
        backgroundColor: '#dfe0e2',
        raw: rawData['DP (B+A)']
      },
      {
        label: 'DP (WBC)',
        data: rawData['DP (WBC)'].map(x => (x / 20) * 100),
        backgroundColor: '#ffd07b',
        raw: rawData['DP (WBC)']
      },
      {
        label: 'HoMeR (B+A)',
        data: rawData['HoMeR (B+A)'].map(x => (x / 20) * 100),
        backgroundColor: '#aaaaaa',
        raw: rawData['HoMeR (B+A)']
      },
      {
        label: 'HoMeR',
        data: rawData['HoMeR'].map(x => (x / 20) * 100),
        backgroundColor: '#fb8b24',
        raw: rawData['HoMeR']
      }
    ]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          ticks: {
            stepSize: 20,
            color: 'black',
            font: {
              size: 16,
              weight: 'bold',
              family: 'Google Sans, sans-serif'
            }
          },
          title: {
            display: true,
            text: 'Success Rate (%)',
            color: 'black',
            font: {
              size: 18,
              weight: 'bold',
              family: 'Google Sans, sans-serif'
            }
          },
          grid: {
            display: false
          }
        },
        x: {
          ticks: {
            color: 'black',
            font: {
              size: 16,
              weight: 'bold',
              family: 'Google Sans, sans-serif'
            },
            rotation: 0
          },
          title: {
            display: true,
            text: 'Tasks',
            color: 'black',
            font: {
              size: 18,
              weight: 'bold',
              family: 'Google Sans, sans-serif'
            }
          },
          grid: {
            display: false
          }
        }
      },
      plugins: {
        legend: {
          display: true,
          position: 'top',
          labels: {
            font: {
              size: 16,
              weight: 'bold',
              family: 'Google Sans, sans-serif'
            },
            color: 'black'
          }
        },
        tooltip: {
          callbacks: {
            label: (context) => {
              const count = context.dataset.raw[context.dataIndex];
              return `${context.dataset.label}: ${count}/20`;
            }
          }
        }
      },
      elements: {
        bar: {
          borderRadius: 4
        }
      }
    }
  };

  new Chart(ctx, config);
}


function generateStripePattern(backgroundColor = '#000000', stripeColor = '#ca5a27', angle = 45) {
  const canvas = document.createElement('canvas');
  canvas.width = 30;
  canvas.height = 30;
  const ctx = canvas.getContext('2d');

  // Fill background with the lighter orange
  ctx.fillStyle = backgroundColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw diagonal black stripe
  ctx.strokeStyle = stripeColor;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(0, canvas.height);
  ctx.lineTo(canvas.width, 0);
  ctx.stroke();

  return canvas;
}

function generateCubeChart() {
  const ctx = document.getElementById('cubeChart').getContext('2d');

  const rawData = {
    'DP (WBC)': [9, 6, 9, 6],
    'HoMeR': [18, 16, 4, 2],
    'HoMeR-Cond-NoAugs': [18, 12, 2, 2],
    'HoMeR-Cond': [16, 14, 15, 16]
  };

  const data = {
    labels: ['Original Cube', 'Small/Large Cube', 'Cube w/ Distractors', 'New Cube Specified'],
    datasets: [
      {
        label: 'DP (WBC)',
        data: rawData['DP (WBC)'].map(x => (x / 20) * 100),
        backgroundColor: '#ffd07b',
        raw: rawData['DP (WBC)']
      },
      {
        label: 'HoMeR',
        data: rawData['HoMeR'].map(x => (x / 20) * 100),
        backgroundColor: '#fb8b24',
        raw: rawData['HoMeR']
      },
      {
        label: 'HoMeR-Cond-NoAugs',
        data: rawData['HoMeR-Cond-NoAugs'].map(x => (x / 20) * 100),
        backgroundColor: '#ca5a27',
        raw: rawData['HoMeR-Cond-NoAugs']
      },
      {
        label: 'HoMeR-Cond',
        data: rawData['HoMeR-Cond'].map(x => (x / 20) * 100),
        backgroundColor: ctx.createPattern(generateStripePattern('#ca5a27', 45), 'repeat'),
        raw: rawData['HoMeR-Cond']
      }
    ]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          ticks: {
            stepSize: 20,
            color: 'black',
            font: {
              size: 16,
              weight: 'bold',
              family: 'Google Sans, sans-serif'
            }
          },
          title: {
            display: true,
            text: 'Success Rate (%)',
            color: 'black',
            font: {
              size: 18,
              weight: 'bold',
              family: 'Google Sans, sans-serif'
            }
          },
          grid: {
            display: false
          }
        },
        x: {
          ticks: {
            color: 'black',
            font: {
              size: 16,
              weight: 'bold',
              family: 'Google Sans, sans-serif'
            },
            rotation: 0
          },
          title: {
            display: true,
            color: 'black',
            font: {
              size: 18,
              weight: 'bold',
              family: 'Google Sans, sans-serif'
            }
          },
          grid: {
            display: false
          }
        }
      },
      plugins: {
        legend: {
          display: true,
          position: 'top',
          labels: {
            font: {
              size: 16,
              weight: 'bold',
              family: 'Google Sans, sans-serif'
            },
            color: 'black'
          }
        },
        tooltip: {
          callbacks: {
            label: (context) => {
              const count = context.dataset.raw[context.dataIndex];
              return `${context.dataset.label}: ${count}/20`;
            }
          }
        }
      },
      elements: {
        bar: {
          borderRadius: 4
        }
      }
    },
  };

  new Chart(ctx, config);
}

function lazyLoadVideos() {
  const videos = document.querySelectorAll('video[data-src]');
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const video = entry.target;
        video.src = video.dataset.src;
        video.load();
        observer.unobserve(video);
      }
    });
  }, options);

  videos.forEach(video => {
    observer.observe(video);
  });
}


// Function to initialize carousels
function initCarousels() {
  var options = {
    slidesToScroll: 1,
    slidesToShow: 3,
    loop: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000,
  };

  var carousels = bulmaCarousel.attach('.carousel', options);

  carousels.forEach(carousel => {
    carousel.on('before:show', state => {
      console.log(state);
    });
  });
}

// Main initialization function
function init() {
  $(".navbar-burger").click(function() {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });

  lazyLoadVideos();
  initCarousels();

  // Adjust video playback speeds
  const videos = document.querySelectorAll('#results-carousel video');
  videos.forEach(video => {
    video.playbackRate = 0.5;
  });

  bulmaSlider.attach();

  // Generate the bar chart after the page has loaded
  if (document.getElementById('taskBarChart')) {
    generateBarChart(); // Ensure this is called after the canvas is in the DOM
  }
  if (document.getElementById('cubeChart')) {
    generateCubeChart();
  }

}

window.addEventListener('DOMContentLoaded', init);

