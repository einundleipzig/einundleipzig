require 'jekyll'
require 'bundler'

task :build do
  ENV['LC_ALL'] = 'C.UTF-8'
  ENV['LANG'] = 'en_US.UTF-8'
  ENV['LANGUAGE'] = 'en_US.UTF-8'

  config = Jekyll.configuration({
    'source' => './',
    'destination' => './_site'
  })
  site = Jekyll::Site.new(config)
  Jekyll::Commands::Build.build site, config
end
