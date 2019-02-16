# Setting up Your Computer for Jekyll Development

#### Windows
If you're running windows take a look at this guide: https://jekyllrb.com/docs/windows/#installation

#### Linux and MacOS
We'd recommend using a [package manager][install-ruby] to install ruby, and then using the command

```shell
gem install Jekyll
```

[install-ruby]: https://www.ruby-lang.org/en/documentation/installation/#package-management-systems

#### MacOS-Specific Issues
Since Mac has a built-in version of ruby, you can't install Jekyll in its library folder without being a system admin and having root access. To get around this, we recommend using [homebrew][install-homebrew]. If you have hombrew installed, type the following commands in.

```shell
brew install rbenv
rbenv init
# Follow the instructions printed after this step to set it up correctly
rbenv install 2.5.3
rbenv global 2.5.3
# Restart your terminal after this command
gem install jekyll
```

More detailed instructions can be found [here][install-rbenv].

[install-homebrew]: https://brew.sh/
[install-rbenv]: https://github.com/rbenv/rbenv#homebrew-on-macos
