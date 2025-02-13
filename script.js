// Function to generate Acceptance Criteria based on the User Story
function generateACC() {
    const userStory = document.getElementById('userStory').value.trim();
    if (userStory === "") {
        alert("Please enter a user story.");
        return;
    }

    // Basic example: Extracting the user story and generating simple ACCs
    const acc = `
Scenario: User story is implemented
Given the user wants to ${userStory}
When the user performs the relevant actions
Then the system should execute the expected behavior
    `;

    document.getElementById('accOutput').value = acc;
}

// Function to generate Playwright Test based on the generated ACC
function generatePlaywright() {
    const acc = document.getElementById('accOutput').value.trim();
    if (acc === "") {
        alert("Please generate the Acceptance Criteria first.");
        return;
    }

    // Playwright test template based on the ACC
    const playwrightTest = `
test.describe('Generated Test for User Story', () => {
    test('Test the user story behavior', async ({ page }) => {
        // Parse the ACC for exact steps
        // Given the user wants to...
        // When the user performs the relevant actions...
        // Then the system should execute the expected behavior
    });
});
    `;

    document.getElementById('playwrightTest').textContent = playwrightTest;
}

// Function to toggle sidebar and adjust layout
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    
    sidebar.classList.toggle('collapsed');
    if (sidebar.classList.contains('collapsed')) {
        mainContent.style.marginLeft = "60px";
    } else {
        mainContent.style.marginLeft = "250px";
    }
}
