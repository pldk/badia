$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "badia/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "badia"
  s.version     = Badia::VERSION
  s.authors     = ["Philippe de Liedekerke"]
  s.email       = ["philippe.deliedekerke@gmail.com"]
  s.homepage    = "TODO"
  s.summary     = "TODO: Summary of Badia."
  s.description = "TODO: Description of Badia."
  s.license     = "MIT"

  s.files = Dir["{app,config,db,lib}/**/*", "MIT-LICENSE", "Rakefile", "README.rdoc"]

  s.add_dependency "rails", "~> 4.2.1"

  s.add_development_dependency "pg"
end
