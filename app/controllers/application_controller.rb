class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  # before_action :authenticate_user!
  # before_action :configue_permitted_parameters, if: :devise_controller?
  # skip_before_action :verify_authenticity_token
  # after_filter :set_access_control_headers

  # def set_access_control_headers
  #   headers['Acces-Control-Allow-Origin'] = '*'
  #   headers['Access-Control-Request-Method'] = '*'
  # end

  # protected

  # def configure_permitted_parameters
  #   devise_parameter_sanitizer.for(:sign_up) { |u| u.permit (
  #     :email,
  #     :username,
  #     :first_name,
  #     :last_name,
  #     :password,
  #     :password_confirmation )
  #   }
  # end
end
