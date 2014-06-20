require_relative "my_solution"

describe Rectangle do
  let(:rectangle) { Rectangle.new(10, 20) }
  let(:square) { Rectangle.new(20, 20) }

  describe '#area' do
    it "is defined" do
      Rectangle.method_defined?(:area).should be_true
    end

    it "returns the correct area of a rectangle" do
      rectangle.area.should eq 200
    end

    it "returns the correct area of a square" do
      square.area.should eq 400
    end
  end

  describe '#perimeter' do
    it "is defined" do
      Rectangle.method_defined?(:perimeter).should be_true
    end

    it "returns the correct perimeter of a rectangle" do
      rectangle.perimeter.should eq 60
    end

    it "returns the correct perimeter of a square" do
      square.perimeter.should eq 80
    end
  end

  describe '#diagonal' do
    it "is defined" do
      Rectangle.method_defined?(:diagonal).should be_true
    end

    it "returns the correct diagonal of a rectangle" do
      rectangle.diagonal.should eq 22.360679774997898
    end

    it "returns the correct diagonal of a square" do
      square.diagonal.should eq 28.284271247461902
    end
  end

  describe '#square?' do
    it "is defined" do
      Rectangle.method_defined?(:square?).should be_true
    end

    it "returns false for a rectangle" do
      rectangle.square?.should be_false
    end

    it "returns true for a square" do
      square.square?.should be_true
    end
  end
end
