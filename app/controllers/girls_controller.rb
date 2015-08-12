class GirlsController < ApplicationController
  layout "blog"
  before_action :set_girl, only: [:show, :edit, :update, :destroy]
  def index
    @girls = Girl.all
  end

  def show
  end

  def new
    @girl = Girl.new
  end

  def create
    @girl = Girl.new(girl_params)
    if @girl.save
      redirect_to girl_path(@girl)
    else
      render :new
    end
  end

  def edit
  end

  def update
    if @girl.update(girl_params)
      redirect_to girl_path(@girl)
    else
      render :edit
    end
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
    params.require(:girl).permit(:name, :city, :age. :phone_number)
  end
end
