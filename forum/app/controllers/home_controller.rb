class HomeController < ApplicationController
  def index
    # ask about created_at 
      @questions = Question.all.order(created_at: :desc) 
  end
  def about
  end
  def temp
    redirect_to root_path
  end
end
