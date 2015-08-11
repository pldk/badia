class AdsController < ApplicationController
  before_action :find_girl, only [:new, :create]

  def new
    @ad = Ad.new
  end

  def create
    @ad = @girl.ads.build(ads_params)
    @ad.save
  end


  private

  def ads_params
    params.require(:ad).permit(:content)
  end

  def find_girl
    @girl = Girl.find(params[:girl_id])
  end
end
