<div align="center" >
    <img src="https://raw.githubusercontent.com/mattbierner/Symphony-of-Death/gh-pages/documentation/images/logo.png" alt="Symphony of Death" />
</div>

*Symphony of Death* is a collection of experiments translating *Halo 5* match events into interactive instruments using WebGL and Web Audio. 

- [Site](http://mattbierner.github.io/Symphony-of-Death)
- [Help](https://github.com/mattbierner/Symphony-of-Death/blob/gh-pages/documentation/help.md)
- [Credits](https://github.com/mattbierner/Symphony-of-Death/blob/gh-pages/documentation/credits.md)

# Instruments
Right now, only the Chordophone instrument is avalible, but there are plans for a few more. If you have an idea for an interesting instrument, check out the section on contribution.

### [Chordophone](http://mattbierner.github.io/Symphony-of-Death/chordophone)

<img src="https://raw.githubusercontent.com/mattbierner/symphony-of-death/gh-pages/images/index/chordophone.png" alt="Symphony of Death" />

Maps out each kill of a match as a vibrating string in 3D space. The resulting instrument can be played like a harp. 


# Contributing
Any contributions to the project are welcome. 

### Building and Running

```sh
# Install requried dependencies and dev dependencies
$ cd symphony-of-death
$ npm install 
```

*Symphony of Death* uses [Jekyll](http://jekyllrb.com) for static page generation and [Webpack](https://github.com/webpack/webpack) for bundling Javascript. Start both of these using:

```sh
$ jekyll serve -w
```

and 

```sh
$ webpack --watch
```

The app should now be running on http:localhost:4000/ 
