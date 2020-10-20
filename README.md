# Hang In There

This is a website that creates 2000s era motivational posters. The user can combine images, titles, and quotes either at random or of their own choosing. This is a simple site that uses vanilla JavaScript, HTML, and CSS. You can visit Hang in There [here](https://alia-peterson.github.io/hang-in-there/).

## Why did you make this?

Good question. We’re students at the [Turing School of Software of Software and Design](https://turing.io/), and this is a site we built from a boilerplate for a class project. If you’re not one of our instructors we’re not sure why you’re looking at this but we hope you have fun!

## Wait who are you?

Alia Peterson(she/her), Cole Fiscus(he/him), and Boone Epstein(he/him). But note that we only wrote (most of) the `main.js` file! Instructors at the Turing School built the HTML, CSS, and `poster.js` files, and also provided us with arrays to use for the randomization, as well as a couple initial functions.


## Features

When you first visit Hang in There you’ll see a random poster with an image, title, and quote selected from our own arrays. If you click the Show Another Random Poster button, you’ll see exactly that: a new random poster. You can also click on any individual element of the poster (the title, image, or quote) to randomize just that element.

![screenshot of main page showing poster](/readme-imgs/homepage.png)

If you click the Make Your Own Poster button you’ll see a form that lets you - you guessed it - make your own poster. If you enter an image URL, title, and quote, you can view your custom poster by clicking the Show My Poster button. If any field is left blank, an alert message will indicate that all fields must be filled out before the poster can be created. The form only accepts images of the following file types: `.jpeg`, `.jpg`, `.png`, or `.gif`. An alert message will display when an image URL does not reference one of those file types.

![screenshot of form](/readme-imgs/form.png)
![screenshot of result](/readme-imgs/form-result.png)

If you like any of your posters you can save them with the Save This Poster button. You can click on the Show Saved Poster button to see everything you’ve saved. If you decide you don’t like one anymore, double click on that poster to delete it. Note that each poster can only be saved once.

![screenshot of saved posters page](/readme-imgs/saved.png)

## Future Additions

Honestly we’re probably not going to add anything to this site after we turn in this project, but we have some ideas for features that might improve it:
- It's outside the scope of this class project, but we'd love to change the CSS and HTML. Better styling could make the site pop.
- Being able to select images, titles, and quotes from the full collection in some sort of dropdown could be really fun.
- More testing for the custom poster form could prevent some issues, such as inputing a value that's already in the relevant array.
