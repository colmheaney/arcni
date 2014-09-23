require 'test_helper'

class StaticPagesControllerTest < ActionController::TestCase
  test "should get home" do
    get :home
    assert_response :success
  end

  test "should get education" do
    get :education
    assert_response :success
  end

  test "should get museum" do
    get :museum
    assert_response :success
  end

  test "should get community" do
    get :community
    assert_response :success
  end

  test "should get about" do
    get :about
    assert_response :success
  end

end
