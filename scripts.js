const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('active'); // This line is for the burger animation

    // Prevent scrolling when the menu is open
    if (nav.classList.contains('nav-active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.faq-question').forEach(function(question) {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const arrow = this.querySelector('.arrow');
            
            if (answer.classList.contains('active')) {
                answer.classList.remove('active');
                answer.style.maxHeight = null;
                arrow.innerHTML = "&#9660;"; // Down arrow
            } else {
                // Close all open answers and reset arrows
                document.querySelectorAll('.faq-answer.active').forEach(function(activeAnswer) {
                    activeAnswer.classList.remove('active');
                    activeAnswer.style.maxHeight = null;
                });
                document.querySelectorAll('.faq-question .arrow').forEach(function(arrow) {
                    arrow.innerHTML = "&#9660;"; // Down arrow
                });

                // Open the clicked answer and rotate arrow
                answer.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + "px";
                arrow.innerHTML = "&#9650;"; // Up arrow
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const scrollLinks = document.querySelectorAll('a[href^="#"]');

    for (let link of scrollLinks) {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            let target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('workoutTime').addEventListener('change', customizeMembership);
    document.getElementById('preferredClasses').addEventListener('change', customizeMembership);
    document.getElementById('fitnessGoals').addEventListener('change', customizeMembership);
});

function customizeMembership() {
    const workoutTime = document.getElementById('workoutTime').value;
    const preferredClasses = document.getElementById('preferredClasses').value;
    const fitnessGoals = document.getElementById('fitnessGoals').value;

    // Example dynamic pricing logic (simplified for demonstration)
    let price = 50; // Base price
    if (workoutTime === 'evening') price += 10;
    if (preferredClasses === 'strength') price += 15;
    if (fitnessGoals === 'build_muscle') price += 20;

    let benefits = ['Access to all facilities'];
    if (preferredClasses !== 'mixed') benefits.push('Specialized ' + preferredClasses + ' classes');
    if (fitnessGoals === 'lose_weight') benefits.push('Weekly nutrition planning sessions');

    let planDescription = `<h3>Your Customized Plan</h3>
                           <p><strong>Workout Time:</strong> ${capitalizeFirstLetter(workoutTime)}</p>
                           <p><strong>Preferred Classes:</strong> ${capitalizeFirstLetter(preferredClasses)}</p>
                           <p><strong>Fitness Goals:</strong> ${capitalizeFirstLetter(fitnessGoals.replace('_', ' '))}</p>
                           <p><strong>Monthly Price:</strong> $${price}</p>
                           <p><strong>Benefits:</strong> <ul>${benefits.map(benefit => `<li>${benefit}</li>`).join('')}</ul></p>`;

    document.getElementById('customizedPlan').innerHTML = planDescription;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function startVrTour() {
    // Example: Load a 360-degree image into the vrTour div
    document.getElementById('vrTour').style.backgroundImage = "url('gym background.jpg')";
    
    // Hide the button after clicking
    document.querySelector('.vr-tour-button').style.display = 'none';
}
document.addEventListener('DOMContentLoaded', function() {
    const achievements = [
        { name: "John Doe", achievement: "Lost 20 pounds in 3 months!" },
        { name: "Jane Smith", achievement: "First place in local marathon." },
        { name: "Emily Johnson", achievement: "Completed 100 consecutive days of yoga." },
        // Existing achievements
        { name: "Carlos Ray", achievement: "Broke the gym's deadlift record." },
        { name: "Angela Martin", achievement: "Ran a full marathon without stopping." },
        { name: "Derek Hale", achievement: "Achieved personal best in the triathlon." }
        // New achievements added
    ];

    const container = document.getElementById('achievementsContainer');
    achievements.forEach(achievement => {
        const achievementElement = document.createElement('div');
        achievementElement.classList.add('achievement');
        achievementElement.innerHTML = `<h3>${achievement.name}</h3><p>${achievement.achievement}</p>`;
        container.appendChild(achievementElement);
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Example data
    const badges = ['5K Run', 'First Yoga Class', '100th Check-in'];
    const leaderboard = [
        { name: 'John Doe', points: 120 },
        { name: 'Jane Smith', points: 110 },
        { name: 'Emily Johnson', points: 105 },
        // Add more leaderboard entries as needed
    ];

    // Populate badges
    const badgesContainer = document.getElementById('badgesContainer');
    badges.forEach(badge => {
        const badgeElement = document.createElement('div');
        badgeElement.classList.add('badge');
        badgeElement.textContent = badge;
        badgesContainer.appendChild(badgeElement);
    });

    // Update member points (example)
    document.getElementById('memberPoints').textContent = '150'; // Example points

    // Populate leaderboard
    const leaderboardList = document.getElementById('leaderboardList');
    leaderboard.forEach(entry => {
        const entryElement = document.createElement('li');
        entryElement.classList.add('leaderboard-entry');
        entryElement.innerHTML = `${entry.name} <span>${entry.points} points</span>`;
        leaderboardList.appendChild(entryElement);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Example check for member status
    const isMember = checkMemberStatus(); // Implement this function based on your auth system

    if (isMember) {
        document.querySelector('.content-teaser').style.display = 'none';
        document.querySelector('.member-content').style.display = 'block';
        loadMemberContent(); // Implement this function to load or display member content
    }
});

function checkMemberStatus() {
    // Placeholder function. Implement based on your authentication system.
    // This could return true if the user is logged in and recognized as a member.
    return false; // Default to false for demonstration
}

function loadMemberContent() {
    // Placeholder function. Dynamically load or reveal member-only content here.
    const memberContent = document.querySelector('.member-content');
    memberContent.innerHTML += `<p>Exclusive workout plans and webinars just for you!</p>`;
}
document.addEventListener('DOMContentLoaded', function() {
    const classesContainer = document.querySelector('.classes-container');
    if (classesContainer) {
        // Simulate fetching real-time class availability
        const classes = [
            { id: 'yoga101', availability: 'Available', time: 'Monday, 7:00 AM - 8:00 AM' },
            { id: 'cardio202', availability: 'Full', time: 'Monday, 9:00 AM - 10:00 AM' },
            { id: 'strength303', availability: 'Available', time: 'Tuesday, 6:00 PM - 7:00 PM' },
            { id: 'pilates404', availability: 'Available', time: 'Wednesday, 8:00 AM - 9:00 AM' },
            { id: 'boxing505', availability: 'Full', time: 'Thursday, 7:00 PM - 8:00 PM' },
            { id: 'spin606', availability: 'Available', time: 'Friday, 6:00 AM - 7:00 AM' },
            { id: 'dance707', availability: 'Available', time: 'Saturday, 10:00 AM - 11:00 AM' },
            // Add more classes as needed
        ];

        classes.forEach(classInfo => {
            // Create class item elements dynamically
            const classElement = document.createElement('div');
            classElement.classList.add('class-item');
            classElement.setAttribute('data-class-id', classInfo.id);
            classElement.innerHTML = `
                <h3>${classInfo.id.split(/(\d+)/).filter(Boolean).join(' - ')}</h3>
                <p>${classInfo.time}</p>
                <p>Status: <span class="availability">${classInfo.availability}</span></p>
            `;

            // Append to the container
            classesContainer.appendChild(classElement);

            // Update the color based on availability
            const availabilityElement = classElement.querySelector('.availability');
            availabilityElement.style.color = classInfo.availability === 'Full' ? '#C3073F' : '#4CAF50'; // Red for full, green for available
        });
    }
});
function signUpForChallenge(challengeName) {
    // Placeholder for sign-up logic
    alert(`Thank you for signing up for the ${challengeName}!`);
    // Here, you would typically send a request to your server to register the user for the challenge.
}
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    const suggestionType = document.getElementById('suggestionType').value;
    const suggestion = document.getElementById('suggestion').value;
    
    // Placeholder: Replace with actual submission logic to your backend
    console.log('Suggestion Type:', suggestionType);
    console.log('Suggestion:', suggestion);
    
    alert('Thank you for your suggestion!');
    // Reset the form after submission
    this.reset();
});
document.addEventListener('DOMContentLoaded', function() {
    // Example data - replace with actual data fetching logic
    const posts = [
        { imageUrl: 'great workout today.jpg', caption: 'Great workout today!' },
        { imageUrl: 'gym 1.jpg', caption: 'Hit a new personal best!' },
        { imageUrl: 'gym 2.jpg', caption: 'Nothing beats a morning run.' },
        { imageUrl: 'gym 3.jpg', caption: 'Yoga session to start the day right.' },
        { imageUrl: 'gym challenge.jpg', caption: 'Completed the 30-day challenge!' },
        { imageUrl: 'gym 4.jpg', caption: 'Feeling stronger every day.' },
        // Add more posts as needed
    ];

    const socialWall = document.getElementById('socialWall');
    if (posts.length > 0) {
        // Clear placeholder text
        socialWall.innerHTML = '';
        // Load posts
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('social-post');
            postElement.innerHTML = `
                <img src="${post.imageUrl}" alt="Member post">
                <p>${post.caption}</p>
            `;
            socialWall.appendChild(postElement);
        });
    }
});
function toggleChatWindow() {
    const chatWindow = document.getElementById('chatWindow');
    chatWindow.style.display = chatWindow.style.display === 'none' ? 'block' : 'none';
}

function handleUserInput(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function sendMessage() {
    const userInput = document.getElementById('userInput');
    const chatMessages = document.getElementById('chatMessages');
    const message = userInput.value.trim();

    if (message) {
        // Display the user's message
        const userMessage = document.createElement('div');
        userMessage.textContent = message;
        userMessage.style.textAlign = 'right';
        chatMessages.appendChild(userMessage);

        // Placeholder for sending the message to the chatbot service and receiving a response
        const botResponse = document.createElement('div');
        botResponse.textContent = 'This is a placeholder response. Integrate with a real chatbot service for dynamic replies.';
        chatMessages.appendChild(botResponse);

        // Scroll to the latest message
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Clear input
        userInput.value = '';
    }
}


    // Example initialization of a live chat widget
    // Replace with the actual initialization code from your live chat provider
    (function() {
        // Live chat widget initialization code here
    })();

    document.getElementById('signup-form').addEventListener('submit', function(event) {
        event.preventDefault();
    
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        var confirmPassword = document.getElementById('confirm-password').value;
    
        if (!name || !email || !password || !confirmPassword) {
            alert('Please fill in all fields.');
            return;
        }
    
        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }
    
        // If all checks are passed, submit the form
        this.submit();
    });