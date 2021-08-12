# Website for Afonsina - Tuna de Engenharia da Universidade do Minho

## To run on your own machine
- Install docker
- Build it:
    ```bash
    make build
    ```
    or
    ```bash
    docker build -t afonsina/afonsina . #may need sudo
    ```
- Serve it:
    ```bash
    make serve
    ```
    or
    ```bash
    docker run -v ${PWD}:/app -v ${PWD}/vendor/bundle:/usr/local/bundle -p 4000:4000 -it --rm --name afonsina afonsina/afonsina #may need sudo
    ```
- As an alternative you can also install Jekyll on your machine...

## To help out
- First time:
    - Learn to work with git
    - Fork it
    - Clone it
    - Add upstream (`git remote add upstream https://github.com/pgilfc/pgilfc.github.io.git`)
- To work on it:
    - Fetch upstream (`git fetch upstream`)
    - Merge upstream with master (`git merge upstream/master`)
    - Branch it (`git checkout -b branch-name`)
    - Work on it
    - Push to branch on remote
    - Pull request that sh!t