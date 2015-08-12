class Girl < ActiveRecord::Base
  validates :name, presence: true
  validates :city, presence: true
  validates :age, presence: true
  validates :phone_number, presence: true

  has_many :pictures, dependent: :destroy
  has_many :ads, dependent: :destroy

  private

  def girls_params
    params.require(:girl).permit(:name, :city, :age, :phone_number)
  end


end
