require_relative "my_solution"

def random_word(length = 5)
  rand(36**length).to_s(36)
end

describe "reverse_words" do
  it "does nothing to an empty string" do
    reverse_words("").should eq ""
  end
  it "reverses a single word" do
    word = random_word
    reverse_words(word).should eq word.reverse
  end
  it "reverses two words" do
    word1 = random_word
    word2 = random_word
    reverse_words("#{word1} #{word2}").should eq "#{word1.reverse} #{word2.reverse}"
  end
  it "reverses a sentence" do
    reverse_words("Ich bin ein Berliner").should eq "hcI nib nie renilreB"
  end
end