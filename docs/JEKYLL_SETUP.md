# Setting up Your Computer for Jekyll Development

### Windows
If you're running windows take a look at this guide: https://jekyllrb.com/docs/windows/#installation

**TLDR;** [Download a Ruby + Devkit Installer][windows-installer] then open Command Prompt and type:

```shell
gem install jekyll bundler
```

[windows-installer]: https://rubyinstaller.org/downloads/

### Linux and MacOS
We'd recommend using a [package manager][install-ruby] to install ruby, and then using the command

```shell
gem install jekyll bundler
```

[install-ruby]: https://www.ruby-lang.org/en/documentation/installation/#package-management-systems

###### MacOS-Specific Issues
Since Mac has a built-in version of ruby, you can't install Jekyll in its library folder without being a system admin and having root access. To get around this, we recommend using [homebrew][install-homebrew]. If you have hombrew installed, type the following commands in.

```shell
brew install rbenv

# Follow the instructions printed after this step to set it up correctly
rbenv init

# Restart your terminal after these commands
rbenv install 2.5.3; rbenv global 2.5.3

# Install
gem install jekyll bundler
```

More detailed instructions can be found [here][install-rbenv].

[install-homebrew]: https://brew.sh/
[install-rbenv]: https://github.com/rbenv/rbenv#homebrew-on-macos

##### Quickstart
It might be faster to manually manipulate path variables to use existing, permission-locked versions of Ruby and RubyGems.
However, **this is not recommended if you use Ruby for more than 1 project.** Ruby dependencies are far easier to manage when using a package manager;
For the sake of completeness though, if you choose to avoid package managers, you can do one of the following

* Change the folder that gems are installed into

  ```shell
  export GEM_HOME=~/.gem
  export GEM_PATH="$GEM_HOME"
  export PATH="$GEM_HOME/bin:$PATH"
  ```
* Change the ownership of the folders that contain Ruby and RubyGems (probably not recommended)

  ```shell
  sudo chown "$(whoami)" /path/that/you/down/have/permission/for
  ```
