function generateACC() {
    const userStory = document.getElementById('userStory').value.trim();
    if (userStory === "") {
        alert("Please enter a user story.");
        return;
    }

    // Extract key parts of the user story
    const lines = userStory.split("\n");
    let actor = "the user"; // Default if no role is found
    let goal = "";
    let benefit = "";
    let requirements = [];

    lines.forEach(line => {
        if (line.toLowerCase().includes("as a")) {
            actor = line.replace("As a", "").trim();
        } else if (line.toLowerCase().includes("i want to")) {
            goal = line.replace("I WANT TO", "").trim();
        } else if (line.toLowerCase().includes("so i can")) {
            benefit = line.replace("SO I CAN", "").trim();
        } else if (line.startsWith("-")) {
            requirements.push(line.trim());
        }
    });

    // Construct Acceptance Criteria
    let acc = `Scenario: ${goal || "Feature Implementation"}\n`;
    acc += `Given ${actor} is using the system\n`;
    acc += `When they attempt to ${goal}\n`;
    acc += `Then they should be able to achieve ${benefit}\n`;

    if (requirements.length > 0) {
        acc += `\nAdditional Conditions:\n`;
        requirements.forEach(req => {
            acc += `- ${req}\n`;
        });
    }

    document.getElementById('accOutput').value = acc;
}

