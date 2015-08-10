class GirlsController < ApplicationController
  before_action :set_girl, only: [:show, :edit, :update, :destroy]
  def index
    @girls = Girls.all
  end

  def show
  end

  def new
    @girl = Girl.new
  end

  def create
    @girl = Gril.new(params[:girls])
    @girl.save

    redirect_to girl_path(@girl)
  end

  def edit
  end

  def update
    @girl.update(params[:girl])

    redirect_to girl_path(@girl)
  end

  def destroy
    @girl.destroy

    redirect_to girls_path
  end

  private

  def set_girl
    @girl = Girl.find(params[:id])
  end

  def girl_params
    params.require(:girl).permit(:name, :address)
  end
end
