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

    // Display the generated ACC
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

    // Display the generated Playwright test code
    document.getElementById('playwrightTest').textContent = playwrightTest;
}

// Function to toggle the sidebar visibility
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const isCollapsed = sidebar.classList.contains('collapsed');
    if (isCollapsed) {
        sidebar.classList.remove('collapsed');
    } else {
        sidebar.classList.add('collapsed');
    }
}
