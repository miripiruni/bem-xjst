block('b')(
    // now all modes are rewrite bemjson values
    js()
        (false),

    // if you want add anything you can use add*() mode:
    addAttrs()
        (function() { return { role: 'greetings' }; }),

    // now you can use mods(), elemMods(), addMods(), addElemMods():
    addMods()
        (function() { return { type: 'awesome' }; }),

    // Now you can use appendContent() and prependContent() modes
    appendContent()
        (', templates!')
);
