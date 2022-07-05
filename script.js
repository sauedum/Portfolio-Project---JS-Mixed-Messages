// Check if class can play the given role
const classRoleCheck = (charClass, role) => {
    switch (charClass) {
        case 'warrior':
            return (role !== 'healer') ? true : false;
            break;
        case 'warlock':
            return (role === 'dps') ? true : false;
            break;
        case 'priest':
            return (role !== 'tank') ? true : false;
            break;
        case 'death-knight':
            return (role !== 'healer') ? true : false;
            break;
        case 'rogue':
            return (role === 'dps') ? true : false;
            break;
        case 'hunter':
            return (role === 'dps') ? true : false;
            break;
        case 'mage':
            return (role === 'dps') ? true : false;
            break;
        case 'demon-hunter':
            return (role !== 'healer') ? true : false;
            break;
        case 'shaman':
            return (role !== 'tank') ? true : false;
            break;
        default:
            return true;
            break;
    }
}

// Object for wow classes, state and role
const wowChar = {
    class: ['warrior', 'warlock', 'priest', 'death-knight', 'monk', 'rogue', 'hunter', 'mage', 'druid', 'demon-hunter', 'shaman', 'paladin'],
    state: ['meta tier', 'good', 'decent', 'bench tier'],
    role: ['tank', 'dps', 'healer'],
    randomize () {
        // Select random class, state and role from arrays
        let randomClass = this.class[Math.floor(Math.random() * this.class.length)];
        let newState = this.state[Math.floor(Math.random() * this.state.length)];
        let newRole = this.role[Math.floor(Math.random() * this.role.length)];

        // New array for randomizing starter words
        const firstWord = ['Your', 'You play', 'The'];
        let newFirstWord = firstWord[Math.floor(Math.random() * firstWord.length)];
        let middleWords;

        let roleCheck = classRoleCheck(randomClass, newRole); // Boolean, true if class can play given role

        // Set middle words based on first words and if the class can play the role
        switch (newFirstWord) {
            case 'Your':
                if (roleCheck) {
                    middleWords = 'is a';
                } else {
                    middleWords = 'cannot play';
                }
                break;
            case 'You play':
                if (roleCheck) {
                    middleWords = 'a';
                } else {
                    middleWords = 'they cannot be';
                }
                break;
            case 'The':
                if (roleCheck) {
                    middleWords = 'class are';
                } else {
                    middleWords = 'class cannot spec';
                }
                break;
        }
        // Removed state string if class cant play given role
        return (roleCheck) ? `${newFirstWord} ${randomClass} ${middleWords} ${newState} ${newRole}` : `${newFirstWord} ${randomClass} ${middleWords} ${newRole}`;
    }
}

console.log(wowChar.randomize());