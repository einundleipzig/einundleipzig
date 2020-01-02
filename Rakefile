require 'jekyll'
require 'bundler'

task :build do
  Bundler.original_system('yarn install')
  Bundler.original_exec('jekyll build')
end
