// <1-fold SSSSS ALL FUNCTION SSSSS

// #2-fold SSSSS region SSSSS

// #/2-fold EEEEE endregion EEEEE

// </1-fold> EEEEE ALL FUNCTION EEEEE

$("document").ready(function() {
    // VAR ASSIGNMENT
    const icons = [ // icon {name, prefix, type, family}
        {
            name: 'cat',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas'
        },
        {
            name: 'crow',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas'
        },
        {
            name: 'dog',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas'
        },
        {
            name: 'dove',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas'
        },
        {
            name: 'dragon',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas'
        },
        {
            name: 'horse',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas'
        },
        {
            name: 'hippo',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas'
        },
        {
            name: 'fish',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas'
        },
        {
            name: 'carrot',
            prefix: 'fa-',
            type: 'vegetable',
            family: 'fas'
        },
        {
            name: 'apple-alt',
            prefix: 'fa-',
            type: 'vegetable',
            family: 'fas'
        },
        {
            name: 'lemon',
            prefix: 'fa-',
            type: 'vegetable',
            family: 'fas'
        },
        {
            name: 'pepper-hot',
            prefix: 'fa-',
            type: 'vegetable',
            family: 'fas'
        },
        {
            name: 'user-astronaut',
            prefix: 'fa-',
            type: 'user',
            family: 'fas'
        },
        {
            name: 'user-graduate',
            prefix: 'fa-',
            type: 'user',
            family: 'fas'
        },
        {
            name: 'user-ninja',
            prefix: 'fa-',
            type: 'user',
            family: 'fas'
        },
        {
            name: 'user-secret',
            prefix: 'fa-',
            type: 'user',
            family: 'fas'
        }
    ];
    console.log(icons);

    const iconType = [ // icons-types --> n

    ];
    console.log(iconType);

    const iconColor = [ // icons-colors --> n
        "red",
        "green",
        "blue"
    ];
    console.log(iconColor);

    // mileston 2 - part 1
    icons.forEach( (icon) => { // create an arrow --> icon-type
        let {type} = icon; // desctructuration
        // console.log(type);
        if (!iconType.includes(type)) {
            iconType.push(type);
        }
    });

    // milestone 1
    icons.forEach((icon) => { // stamp all icon
        let {name, prefix, type, family} = icon; // destructuration
        // console.log(name);
        // console.log(prefix);
        // console.log(family);

        // milestone 2 - part 2 - associate icon and color
        typeIndex = iconType.indexOf(type);
        // console.log(typeIndex);

        let color = iconColor[typeIndex];
        // console.log(color);

        // print-out + color
        $("#icon-container").append(`
            <div class="icon-card">
                <i class="${family} ${prefix}${name} ${prefix}2x" style="color: ${color}"></i>
                <span>${name}</span>
            </div>
        `);

    });








});
